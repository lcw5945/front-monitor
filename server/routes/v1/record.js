import Params from '../../utils/params'
import Serror from '../../utils/serror'
import recordCtrl from '../../controls/record'
import _ from 'lodash'

export default {
    route(router) {
        /**
         * 获得错误列表
         */
        router.get('/getRecordList', async (req, res) => {
            let data = null,
                conditions = {},
                unitTime = 0,
                markTime = 0,
                minTime = 0,
                currTime = Date.now(),
                {skip, limit, sortType, params,filterTime} = Params.queryValidate(req)
            skip = parseInt(skip)
            limit = parseInt(limit)
            params = JSON.parse(params)
            sortType = JSON.parse(sortType)
            filterTime = JSON.parse(filterTime)

            if(params['project_id'] && Params.isObejctId(params['project_id'])){
                conditions['project_id'] = params['project_id']
            }
            if(params['env']){
                conditions['env'] = params['env']
            }
            if(params['status']){
                conditions['status'] = params['status']
            }

            if (filterTime.format == 'm') {
                unitTime = 60 * 1000
            }else if (filterTime.format == 'h') {
                unitTime = 60 * 60 * 1000
            } else if (filterTime.format == 'd') {
                unitTime = 24 * 60 * 60 * 1000
            } else if (filterTime.format == 'month') {
                unitTime = 30 * 24 * 60 * 60 * 1000
            }

            // markTime = currTime - unitTime
            markTime = currTime
            minTime = currTime - unitTime * filterTime.grid

            conditions['start_time'] = {$gte: minTime,$lt: markTime}


            if (skip >= 0 && limit >= 0 && !_.isEmpty(sortType) && conditions['start_time'].$gte>0 && conditions['start_time'].$lt>0 && params['project_id']) {
                data = await recordCtrl.getRecordList(skip, limit, sortType, conditions)
            }else {
                data = Serror.paramsError("查询参数错误")
            }

            res.json(data)
        })
        
    }
};