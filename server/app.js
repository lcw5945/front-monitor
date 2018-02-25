import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import './lib/ws-server'
import './lib/mongdb'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import './service/redis'
import api from './routes/v1/index'
import webConf from '../constant/web'
import Log from 'hefan-debug-log-s'

const app = express()
const host = webConf.nuxt.host
const port = webConf.nuxt.port
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//port 
app.set('port', port)
// router
app.use('/api', api)
//debug
// app.use('/postDebug', debugCtrl.postDebug);
// app.use('/getLogList', debugCtrl.getLogList);
// app.use('/getLogDetails', debugCtrl.getLogDetails);
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
console.log('dev', config.dev)

Log.config('09341ad31eeb8a27778d67b1ddde220d', process.env.NODE_ENV)

const nuxt = new Nuxt(config)
// nuxt.listen(port, host)



if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console