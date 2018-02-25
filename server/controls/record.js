import Model from '../models'
import Entity from '../service/entity'
import Base64 from '../utils/base64'
import Utils from '../utils'
import Log from 'hefan-debug-log-s'

export default {

    async getRecordList(skip, limit, sortType={start_time:-1}, conditions={}) {
        let res = null
        let doc = await Entity.fetchPage(Model.record,skip, limit, sortType, conditions).catch(e => {
            res = {
                code: 500,
                data: null,
                msg: 'query record list error'
            }
        })

        Log.debug('获得错误列表数据', doc)

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