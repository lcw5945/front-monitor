/**
 * Created by user on 2018/2/5.
 */
import Serror from '../../utils/serror'
import ParamsUtils from '../../utils/params'
import langCtrl from '../../controls/language'
import _ from 'lodash'

export default {
    route(router) {
         /**
         * 获得语言列表
         */
        router.get('/getLanguageList', async (req, res) => {
            let data = await langCtrl.getLanguageList()
            res.json(data)
        })
    }
}