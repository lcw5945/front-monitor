import Model from '../models'
import Entity from '../service/entity'
import Base64 from '../utils/base64'
import Utils from '../utils'
import Log from 'hefan-debug-log-s'
import Serror from '../utils/serror'
import _ from 'lodash'

export default {

    async getProjectList() {
        let res = null
        let doc = await Entity.refFetch(Model.project, 'create_time',{}).catch(e => {
            res = {
                code: 500,
                data: null,
                msg: 'query project list error'
            }
        })

        Log.debug('获得项目数据', doc)

        let newDoc = []
        for(let item of doc){
            newDoc.push(_.pick(item, ['_id','name','language','icon','update_time','pj_key']))
        }

        // 解析数据
        if (!res) {
            res = {
                code: 200,
                data: newDoc,
                msg: ''
            }
        }

        //返回数据
        return Promise.resolve(res)
    },
    /**
     * 更新添加项目
     * @param {*} id
     * @param {*} name
     */
    async updateAddProject(name, language, id = ''){
        let res = null
        let doc = null
        let pj_key = Utils.md5(Base64.encode(`${name}${language}`))
        console.log('pj_key is -> ', pj_key)
        if (id) {
            doc = await Entity.update(Model.project, id, {name, language}).catch(e => {
                res = {
                    code: 500,
                    data: null,
                    msg: `update project error project id is ${id}`
                }
            })
        } else {
            let pjdoc = await Entity.find(Model.project, {name}).catch(e => {
                res = {
                    code: 500,
                    data: null,
                    msg: `find project error, ${name} already exist`
                }
            })

            if(pjdoc.length>0){
                res = {
                    code: 406,
                    data: null,
                    msg: `create project error,${name} already exist`
                }
            }else if(!res){
                doc = await Entity.create(Model.project, {name, language, pj_key}).catch(e => {
                    res = {
                        code: 500,
                        data: null,
                        msg: 'create project error'
                    }
                })
            }
        }


        // 解析数据
        if (!res) {
            res = {
                code: 200,
                data: pj_key,
                msg: 'ok'
            }
        }

        //返回数据
        return new Promise((resolve) => {
            resolve(res)
        })
    },

    async getProject(pj_key){
        let res = null
        let doc = await Entity.findOne(Model.project, {pj_key}).catch(e=>{
            res = Serror.findError('project 查询失败')
        })
        
        // 解析数据
        if (!res) {
            res = {
                code: 200,
                data: doc,
                msg: 'ok'
            }
        }

        //返回数据
        return Promise.resolve(res)
    }
}