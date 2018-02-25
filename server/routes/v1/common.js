import Params from '../../utils/params'
import Serror from '../../utils/serror'
import redisCtrl from '../../controls/redis'

export default {
    route(router) {
        /**
         * 获得项目列表
         */
        router.get('/state/sum', async (req, res) => {
            let param = Params.queryValidate(req)
            let data = null
            if(!param.project_id){
                data = Serror.paramsError(`params project_id is empty`)
            }else{
                param.env == param.env || ''
                param.grid == param.grid || 20
                param.format == param.format || 'd'
                data = await redisCtrl.getError(param.project_id, param.env, param.grid, param.format).catch(e=>{
                    data = {
                        code: 406,
                        data: null,
                        msg: `this project_id ${param.project_id} is invalid`
                    }
                })
            }
            
            res.json(data)
        })

        /**
         * 发送邮件
         */
        router.get('/sendMail', async(req, res) => {
            let param = Params.queryValidate(req)
            if (param) {
                let { recipient, subject, html } = param
                let error = null
                await logCtrl.sendMail(recipient, subject, html).catch(e => {
                    error = e
                })
                let msg = 'send success'
                if (error) {
                    msg = error
                }
                // respone result
                res.json({
                    msg: msg
                })
            } else {
                Serror.queryError(res, 'query error', 405)
            }
        })
    }
};