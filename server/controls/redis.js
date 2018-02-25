import redis from '../service/redis'
import Log from 'hefan-debug-log-s'

export default {
    /**
     * 添加错误
     * @param {*} pjId 
     * @param {*} env 
     */
    async addError(pjId, env) {
        let pjData = await redis.get(pjId)
        let item = {
            env: env,
            time: Date.now()
        }
        if (pjData && pjData.data) {
            pjData.data.unshift(item)
        } else {
            pjData = {data:[item]}
            await redis.set(pjId, pjData)
        }
    },
    
    /**
     * 获得最近一段时间错误
     * @param {*} pjId -项目id
     * @param {*} env  -环境
     * @param {*} grid -多少格子
     * @param {*} format -单位 小时，天，月
     */
    async getError(pjId, env = '', grid = 20, format = 'd') {
        let markTime,
            minTime,
            unitTime,
            items,
            resList = [],
            res,
            currTime = Date.now()
        let pjData = await redis.get(pjId)
        
        Log.debug(`projct id is ${pjId} get data from redis is ${JSON.stringify(pjData)}`)
        env = env == '' ? ['development', 'testing', 'prepare', 'production'] : [env]

        if (!pjData) {
            return Promise.resolve({
                code: 408,
                data: null,
                msg: ''
            })
        }

        items = pjData.data
        if (format == 'm') {
            unitTime = 60 * 1000
        }else if (format == 'h') {
            unitTime = 60 * 60 * 1000
        } else if (format == 'd') {
            unitTime = 24 * 60 * 60 * 1000
        } else if (format == 'month') {
            unitTime = 30 * 24 * 60 * 60 * 1000
        }

        markTime = currTime - unitTime
        minTime = currTime - unitTime * grid

        let error = 0
        let totalError = 0
        let i = 0
        for (let item of items) {
            if (parseInt(item.time) < minTime) break
            if(env.includes(item.env)){
                if (parseInt(item.time) > markTime) {
                    error++
                } else {
                    resList.push({
                        time: new Date(markTime + unitTime),
                        errorNum: error
                    })
                    error = 1
                    markTime-=unitTime
                }
                totalError++
                i++
                if(i == items.length){
                    resList.push({
                        time: new Date(markTime + unitTime),
                        errorNum: error
                    })
                }
            }
        }

        for(let i=0; i<grid; i++){
            if(!resList[i]){
                resList[i] = {
                    time: new Date(markTime),
                    errorNum: 0
                }
                markTime = markTime - unitTime
            }
        }

        return Promise.resolve({
            code: 200,
            data: {
                errorList: resList,
                totalError: totalError
            },
            msg: ''
        })
    }
}