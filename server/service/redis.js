import Redis from "ioredis"
import config from '../conf/web'

const conf = process.env.NODE_ENV == "development" ? config.redis.TEST :
    (process.env.NODE_ENV == 'testing' ? config.redis.TEST : config.redis.PRO);

let redis = null
if (!redis) {
    redis = new Redis(conf.port, conf.host)
}

export default {
    async get(key) {
        let data = await redis.get(`DEBUG_S:${key}`);
        try {
            data = JSON.parse(data)
        } catch (e) {
            data = null
        }      
        return Promise.resolve(data)
    },

    async set(key, value) {
        let res = null
        try {
            res = await redis.set(`DEBUG_S:${key}`, JSON.stringify(value))
        } catch (e) {
            res = null
        }

        return Promise.resolve(res)
    },

    async destroy(key, ctx) {
        await redis.del(`DEBUG_S:${key}`)
        return Promise.resolve(key)
    }
}