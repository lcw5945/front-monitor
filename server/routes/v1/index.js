/**
 * Created by Cray on 2017/3/13.
 */
import express from 'express'

import logApi from './log'
import problemApi from './problem'
import pjApi from './project'
import recordApi from './record'
import langApi from './language'
import commonApi from './common'
import Serror from '../../utils/serror'

var router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// Log error
router.use((req, res, next) => {
    let resJson = res.json
    res.json = function(data){
        resJson.call(res, data)
        Serror.postError(req, res, data)
    }
    next()
})

router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

logApi.route(router)
problemApi.route(router)
pjApi.route(router)
recordApi.route(router)
langApi.route(router)
commonApi.route(router)

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
})

export default router