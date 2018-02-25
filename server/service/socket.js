/**
 * Created by Cray on 2017/4/17.
 */
import _ from 'lodash'
import wss from '../lib/ws-server'

export default {
    resolve(data) {
        switch (data['action']) {
            case '4001':
                {
                    _debug(data)
                    break
                }
            case '4002':
            {
                _problemSum(data.num)
                break
            }
        }
    }
}

/**
 * 调试
 * @private
 */
function _debug(data) {

    let sendData = {
        'code': '200',
        'action': '4001',
        'data': data
    }
    _send(sendData)
}

/**
 * 错误总数
 * @private
 */
function _problemSum(data) {
    let sendData = {
        'code': '200',
        'action': '4002',
        'data': data
    }
    _send(sendData)
}

/**
 * 发送数据
 * @param sendData
 * @private
 */
function _send(sendData) {

    sendData.data.time = new Date().getTime()
    sendData = JSON.stringify(sendData)
    wss.clients.forEach((client) => {
        client.send(sendData)
    })
}