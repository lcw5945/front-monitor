import Params from '../../utils/params'
import Serror from '../../utils/serror'
import pjCtrl from '../../controls/project'

export default {
    route(router) {
        /**
         * 获得项目列表
         */
        router.get('/getProjectList', async (req, res) => {
            let data = await pjCtrl.getProjectList()
            res.json(data)
        })
        /**
         * 更新创建项目
         */
        router.post('/updateAddProject', async (req, res) => {
            let param = Params.bodyValidate(req)
            let data = null
            if(!param.name || !param.language || !Params.isObejctId(param.language)){
                data = Serror.paramsError('参数错误，项目 name & language is empty ')
            }else{
                if(param.id){
                    if(Params.isObejctId(param.id)){
                        data = await pjCtrl.updateAddProject(param.name, param.language, param.id)
                    }else{
                        data = Serror.paramsError(res, 'id 不合法')
                    }
                 }else{
                     data = await pjCtrl.updateAddProject(param.name, param.language)
                 }
            }
 
            res.json(data)
        })
    }
};