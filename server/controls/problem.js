/**
 * Created by user on 2018/2/5.
 */

import _ from 'lodash'
import Entity from '../service/entity'
import Model from '../models'
import Serror from '../utils/serror'
import Utils from '../utils'
import redis from './redis'
import Log from 'hefan-debug-log-s'

export default {
    /**
     * problem查询列表
     * @param {String} condition 查询条件  project_id、url、script_url、env
     * @param {String} skip
     * @param {String} limit
     * **/
    async problemList(condition, skip, limit) {
        let res = null,
            data = null;

        data = await Entity.fetchPage(Model.problem, skip, limit, 'create_time', condition).catch(e => {
            res = Serror.findError('problem查询失败')
        })
        if (!res) {
            res = {
                code: 200,
                data: data,
                msg: ''
            }
        }
        return new Promise((resolve) => {
            resolve(res)
        })
    },

    /**
     * problem详情
     * @param {String} id 问题id
     * **/
    async problem(id) {
        let res = null,
            data = null;

        data = await Entity.findById(Model.problem, id).catch(e => {
            res = Serror.findError('problem查询失败')
        })
        if (!res) {
            res = {
                code: 200,
                data: data,
                msg: ''
            }
        }
        return new Promise((resolve) => {
            resolve(res)
        })

    },


    /**
     * 增加和更新problem
     * **/
    async addUpdateProblem(params, id) {
        let res = null,
            data = null;
        if (id) {
            data = await Entity.update(Model.problem, id, params).catch(e => {
                res = Serror.updateError('更新失败')
            })
        } else {
            data = await Entity.create(Model.problem, params).catch(e => {
                res = Serror.createError('添加失败')
            })
        }

        if (!res) {
            res = {
                code: 200,
                data: data,
                msg: ''
            }

            //添加redis
            redis.addError(params.project_id, params.env)
            
            //更新错误记录
            let conditions = {}
            let client = true
            if(params.server && Object.keys(params.server).length > 0){ //server
                client = false
                conditions = {url:params.url, project_id: params.project_id, env: params.env}
            }else{ //front
                conditions = { url:params.url, 
                    project_id: params.project_id,
                script_url: params.script_url, env: params.env }
            }

            let recDoc = await Entity.find(Model.record, conditions).catch(e=>{
                res.msg += `insert problem table is ok, but find recods error conditions is ${conditions}`
            })

            if(recDoc && recDoc.length > 0){
                let recData = {...recDoc[0]['_doc']}
                Log.debug('查询到错误记录数据', recData)
                let number_occurence = recData.number_occurence + 1
                let number_user = recData.number_user
                let users = recData.users

                let updateData = null
                if(client){
                    if(!recData.users.includes(params.ip_info.ip)){
                        users.push(params.ip_info.ip)
                        number_user += 1
                    }

                    updateData = {
                        latest_time: Utils.now,
                        number_occurence: number_occurence,
                        number_user: number_user,
                        users: users
                    }
                }else{
                    updateData = { latest_time: Utils.now,
                        number_occurence: number_occurence }
                }
                Log.debug('updateData', updateData)
                await Entity.update(Model.record, recData._id, updateData).catch(e=>{
                    res.msg += `update problem error, update conditions is ${JSON.stringify(updateData)}`
                })
              
            }else{
                await Entity.create(Model.record, params).catch(e=>{
                    res.msg += `insert problem table is ok, but create recods error params is ${params}`
                })
            }
        }

        return Promise.resolve(res)

    },

    /*
     * 删除问题
     * @param {String} id 问题id
     * */
    async deleteProblem(id) {
        let res = null,
            data = null;

        data = Entity.remove(Model.problem, id).catch(e => {
            res = Serror.delError('更新失败')
        })
        if (!res) {
            res = {
                code: 200,
                data: data,
                msg: ''
            }
        }

        return new Promise((resolve) => {
            resolve(res)
        })

    },

    /**
     * 获取累计错误数量
     **/
    async problemSum() {
        let res = null,
            data = null;
        data = await Entity.count(Model.problem,{}).catch(e => {
            res = Serror.findError()
        })
        if (!res) {
            res = {
                code: 200,
                data: data,
                msg: ''
            }
        }

        return new Promise((resolve) => {
            resolve(res)
        })

    }


}