import Model from '../models'
import Entity from '../service/entity'
import _ from 'lodash'

export default {

    async getLanguageList() {
        let res = null
        let doc = await Entity.fetch(Model.language, "create_time").catch(e => {
            res = {
                code: 500,
                data: null,
                msg: 'query language list error'
            }
        })


        // 解析数据
        if (!res) {
            res = {
                code: 200,
                data: doc,
                msg: ''
            }
        }

        //返回数据
        return new Promise((resolve) => {
            resolve(res)
        })
    }
}