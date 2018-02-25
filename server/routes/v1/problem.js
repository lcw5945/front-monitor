/**
 * Created by user on 2018/2/5.
 */
import Serror from '../../utils/serror'
import ParamsUtils from '../../utils/params'
import problemControl from '../../controls/problem'
import _ from 'lodash'
import SocketControl from '../../service/socket'

export default {
    route(router) {
        /*
         * 根据id得到problem
         * @param {String} projectid 项目id
         * @param {String} url
         * @param {String} script_url
         * @param {String} env
         * @param {String} skip 页数
         * @param {String} limit
         * */
        router.get('/problemList', async function (req, res) {
            let resData = null,
                {skip, limit, projectid,url,script_url,env} = ParamsUtils.queryValidate(req)||{}

            if (parseInt(skip) >= 0 && parseInt(limit) >= 0 && ParamsUtils.isObejctId(projectid) && url && env) {
                resData = await problemControl.problemList({project_id: projectid,url,script_url,env}, skip, limit)
            } else {
                resData = Serror.paramsError("参数错误")
            }
            console.log(resData)
            res.json(resData)
        })

        /*
         * 根据id得到problem
         * @param {String} id 问题id
         * */
        router.get('/problem', async function (req, res) {
            let resData = null,
                {id} = ParamsUtils.queryValidate(req)

            if (!ParamsUtils.isObejctId(id)) {
                resData = Serror.paramsError("id参数错误")
            } else {
                resData = await problemControl.problem(id)
            }

            res.json(resData)

        })

        /*
         * 增加problem
         * @param 必填 {String} project_id 项目id
         * @param 必填 {String} url
         * @param 必填 {String} error
         * */
        router.post('/addProblem', async function (req, res) {
            let params = ParamsUtils.bodyValidate(req)
            let resData
            if (!params.project_id || !params.url || !params.error_info || !params.env) {
                resData = Serror.paramsError(`参数错误 id is ${params.project_id} url is ${params.url}
                errorinfo is ${params.error_info } env is ${params.env}`)
            } else {
                try{
                    params.error_info = JSON.parse(params.error_info)
                    if(params.stack_info){
                        params.stack_info = JSON.parse(params.stack_info)
                    }

                    if(params.ip_info){
                        params.ip_info = JSON.parse(params.ip_info)
                    }

                    if(params.server){
                        params.server = JSON.parse(params.server)
                    }
                   
                    resData = await problemControl.addUpdateProblem(params)


                }catch(e){
                    resData={
                        code: 406,
                        data: null,
                        msg: '参数转JSON失败'
                    }
                }
            }
            res.json(resData)

        })


        /**
         * 获取累计错误数量
         **/
        router.get('/problemSum', async(req, res) => {
            let data = await problemControl.problemSum().catch(e => {
                data = Serror.findError()
            })
            res.json(data)
        })

    }
}