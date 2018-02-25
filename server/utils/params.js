/**
 * Created by Cray on 2017/5/25.
 */
import _ from 'lodash'
export default {
    /**
     * 查询参数验证
     * @param req
     * @returns {*}
     */
    queryValidate(req) {
        let query = req.query
        if (typeof(query) !== 'object') {
            return null
        }
        return query
    },
    /**
     * 提交参数验证
     * @param req
     * @returns {*}
     */
    bodyValidate(req) {
        let body = req.body
        if (typeof(body) !== 'object') {
            return null
        }
        return body
    },
    /**
     * 判断是否是id
     * @param id
     * @returns {*}
     */
    isObejctId(id){
        if(id && String(id).length === 24){
            return true
        }
        return false
    }
}