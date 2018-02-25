/**
 * Created by Cray on 2017/8/17.
 */
import _ from 'lodash'
import Model from '../models'
import Utils from '../utils'


export const wraper = (model, params) => {
    if (model === Model.problem) {
        params = _.pick(params, ['project_id', 'name', 'url', 'script_url', 'env', 'message', 'error_info'
        ,'stack_info', 'browser_name', 'browser_version', 'device_name', 'ip_info', 'server_info', 'create_time']);
        return Object.assign({}, {
            project_id: "",
            name: "",
            url: "",
            script_url: "",
            env: "",
            message: "",
            error_info: {},
            stack_info: {},
            browser_name: "",
            browser_version: "",
            device_name: "",
            ip_info: {},
            server_info: {},
            create_time: Utils.now
        }, params)
    }

    if (model === Model.project) {
        params = _.pick(params, ['name', 'pj_key', 'language', 'icon', 'update_time', 'create_time']);
        return Object.assign({}, {
            name: "",
            pj_key: "",
            language: "",
            icon: "",
            update_time: Utils.now,
            create_time: Utils.now
        }, params)
    }

    if (model === Model.record) {
        params = _.pick(params, [ 'project_id', 'name', 'url', 'message', 'script_url', 'env', 'start_time'
        , 'latest_time', 'number_occurence', 'number_user', 'status']);
        return Object.assign({}, {
            project_id: '',
            name: '',
            url: '',
            message: '',
            script_url: '',
            env: '',
            users: [],
            start_time: Utils.now,
            latest_time:  Utils.now,
            number_occurence: 1,
            number_user: 1,
            status: 'open'
        }, params)
    }

    if (model === Model.user) {
        params = _.pick(params, ['username', 'nickname', 'headimgurl', 'authority'
    ,'reg_time', 'login_time', 'update_time', 'star', 'weixin', 'qq']);
        return Object.assign({}, {
            username: "",
            nickname: "",
            headimgurl: "",
            authority: 0,
            reg_time: "",
            login_time: "",
            update_time: "",
            star: [],
            weixin: {},
            qq: {},
        }, params)
    }
}