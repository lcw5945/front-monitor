import SocketControl from '../../service/socket'
import Params from '../../utils/params'
import emailConf from '../../conf/mailconf'
import moment from "moment"
import _ from 'lodash'
import logCtrl from '../../controls/log'
import mailCtrl from '../../controls/mail'
import pjCtrl from '../../controls/project'
import problemCtrl from '../../controls/problem'
import Serror from '../../utils/serror'
import Utils from '../../utils'
import Log from 'hefan-debug-log-s'
import problemControl from '../../controls/problem'

export default {
    route(router) {
        router.post('/postDebug', async function(req, res) {
            let paramParse = null
            let resData = null
            let param = Params.bodyValidate(req)
            Log.debug(`收到参数 ${param.data}`)
            //参数解析
            if (param) {
                try {
                    paramParse = JSON.parse(param.data)
                } catch (e) {
                    resData = Serror.paramsError('参数data并不是json类型')
                }
            } else {
                resData = Serror.paramsError('参数为空')
            }
            //参数错误 返回结果并发送邮件
            if (resData) {
                sendMail(JSON.stringify(resData))
                res.json(resData)
                return
            }
            if(!paramParse.pjKey){
                res.json({
                    code: 200,
                    msg: 'ok'
                })
                return
            }
            //处理业务
            paramParse.ipInfo = paramParse.ipInfo || {}
            // paramParse.logData = paramParse.logData[0] || paramParse.logData
            //写入日志
            logCtrl.writeLog(paramParse, 4, 1048576) //log文件最大size   测试2000  1mb  -->1048576

            //send socket
            SocketControl.resolve(paramParse)

            //如果类型是错误
            if (paramParse.type == 'error') {
                paramParse.erroData = paramParse.logData[0]
                //查询项目数据 错误返回结果并发送邮件
                let pjData = await pjCtrl.getProject(paramParse.pjKey)
                if (pjData.code !== 200) {
                    sendMail(JSON.stringify(pjData))
                    res.json(pjData)
                    return
                }

                console.log(345345345, pjData)

                let pjParams = {
                    project_id: "",
                    name: "",
                    url: "",
                    script_url: "",
                    env: "",
                    message: "",
                    error_info: {},
                    stack_info: {},
                    browser_name: "",
                    browser_version: "",
                    device_name: "",
                    ip_info: {},
                    server_info: {}
                }
                //服务端错误
                if (paramParse.server) {
                    if (_.isPlainObject(paramParse.erroData)) {
                        pjParams = Object.assign(pjParams, {
                            project_id: pjData.data._id,
                            name: '',
                            server_info: paramParse.server,
                            url: paramParse.erroData.path || '',
                            env: paramParse.env,
                            message: paramParse.erroData.message || '',
                            error_info: paramParse.erroData,
                            stack_info: {
                                message: paramParse.erroData.message,
                                status: paramParse.erroData.status,
                                stack: paramParse.erroData.stack
                            }
                        })
                        if (paramParse.erroData.stack) {
                            pjParams.name = '服务错误'
                        } else {
                            pjParams.name = '请求出错'
                        }
                    } else {
                        pjParams = {
                            project_id: pjData.data._id,
                            name: '请求出错',
                            server_info: paramParse.server,
                            url: paramParse.erroData,
                            env: paramParse.env,
                            message: paramParse.erroData,
                            error_info: paramParse.erroData,
                            stack_info: {
                                message: '',
                                status: '',
                                stack: ''
                            }
                        }
                    }

                } else { //前端
                    if (_.isPlainObject(paramParse.erroData)) {
                        let browser = Utils.browserSniff(paramParse.erroData.mobileInfo.msg)
                        pjParams = Object.assign(pjParams, {
                            project_id: pjData.data._id,
                            name: paramParse.erroData.errorMessage.msg || '',
                            url: paramParse.url,
                            script_url: paramParse.erroData.scriptURI.msg,
                            env: paramParse.env,
                            message: paramParse.erroData.errorMessage.msg,
                            error_info: paramParse.erroData,
                            ip_info: paramParse.ipInfo,
                            stack_info: {
                                message: paramParse.erroData.errorMessage.msg,
                                stack: paramParse.erroData.errorObj.msg
                            },
                            browser_name: browser.name,
                            browser_version: browser.version,
                            device_name: `${browser.win ? 'pc' : browser.ios ? 'ios': 'android' }`,
                        })
                        pjParams.name = pjParams.name.substring(0, pjParams.name.indexOf(':'))
                        if (browser.wechat) pjParams.device_name = pjParams.device_name + '-wechat'
                        if (browser.qq) pjParams.device_name = pjParams.device_name + '-qq'
                        if (browser.weibo) pjParams.device_name = pjParams.device_name + '-weibo'
                    } else {
                        pjParams = {
                            project_id: pjData.data._id,
                            name: '页面报错',
                            server_info: {},
                            ip_info: {},
                            url: paramParse.erroData,
                            script_url: '',
                            env: paramParse.env,
                            message: paramParse.erroData,
                            error_info: paramParse.erroData,
                            stack_info: {
                                message: '',
                                status: '',
                                stack: ''
                            },
                            browser_name: '',
                            browser_version: '',
                            device_name: '',
                        }
                    }

                }

                let insertRes = await problemCtrl.addUpdateProblem(pjParams),
                    problemSum = {
                        num: 0,
                        action: '4002'
                    }

                problemSum.num = await problemControl.problemSum()
                SocketControl.resolve(problemSum)

                if (insertRes.code != 200 || insertRes.msg != '') {
                    sendMail(JSON.stringify(insertRes))
                    res.json(insertRes)
                    return
                }

                //如果是生产环境 发送邮件提醒
                if (paramParse.env == 'production') {
                    let erroData = JSON.stringify(paramParse.erroData);
                    erroData = erroData.replace(/\\/g, ' ')
                    let html = `<b>项目名称:${pjData.name}</b><br/>
                                <b>URL:${paramParse.url}</b><br/>
                                <b>环境:${paramParse.env}</b><br/>
                                <b>用户IP信息:${JSON.stringify(paramParse.ipInfo)}</b><br/>
                                <b>错误类型:${paramParse.type}</b><br/>
                                <b>日志时间:${ moment().format()}</b><br/>
                                <b>错误数据:${erroData}</b>`

                    //过滤微信错误和位置sriptUrl错误
                    let isSendMail = true
                    if (paramParse.erroData.errorMessage.msg.indexOf('WeixinJSBridge') > -1 ||
                        paramParse.erroData.scriptURI.msg.indexOf('.js' > 0)) {
                        isSendMail = false
                    }

                    if (isSendMail) {
                        sendMail(JSON.stringify(html))
                    }
                }
            }

            // return
            res.json({ code: '200', msg: '成功' })
        })

        // router.get('/getLogList', function(req, res) {
        //     let list = [];
        //     logCtrl.readFileList('./debugLog', (err, files) => {
        //         if (err) {
        //             res.json({ code: '10001', err: err, msg: '失败' })
        //         } else {
        //             list = files;
        //             res.json({ code: '200', data: list, msg: '成功' })
        //         }

        //     })

        // })

        // router.get('/getLogDetails', function(req, res) {
        //     let list = [];
        //     let param = Params.queryValidate(req)
        //     logCtrl.readFile('./debugLog/' + param.fileName, (err, logArr) => {
        //         if (err) {
        //             res.json({ code: '10001', err: '文件不存在！', msg: '失败' })
        //         } else {
        //             list = logArr;
        //             res.json({ code: '200', data: logArr, msg: '成功' })
        //         }

        //     })

        // })
    }
}

/**
 * 邮件发送
 * @param {*} html 
 */
function sendMail(html) {
    //mailCtrl.sendMail(emailConf.mailInfo.receivers, emailConf.mailInfo.subject, html).catch(e => { error = e })
}