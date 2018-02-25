/**
 * Created by Cray on 2017/1/5.
 */

import _ from 'lodash';
import axios from '~/plugins/axios';
import logApi from './log/index';
import problemApi from './problem';
import commonApi from './common/index';
import qs from 'qs';

export default Object.assign({
        /*getAliOssUploadCfg() {
            return axios.get('http://testtools.hefantv.com/api/getFileUploadSignature')
        },*/
         /**
         * 解析结果
         * @param data
         * @returns {*}
         */
        parse(data) {
            if(_.isObject(data)){
                let result = data["data"] || {};
                if (!_.isObject(result)) {
                    result = JSON.parse(result);
                }
                if (data["status"] !== 200) {
                    return result
                }

                if (result && result["code"] == 200) {
                    return result['data']
                }else if(result && result["code"] == 403){ // 没权限
                    alert('您没有权限');
                    return null
                }else if(result && result["code"] == 401){ // 未登录
                    alert('请登录后在操作');
                    return null
                }else {
                    console.error("请求异常：",result['data'])
                    return null
                }
            }
        },
        /**
         * Get方式格式化参数
         * @param data
         */
        GetParamFormat(data = {}) {
            return {params:data};
        },
        /**
         * Post方式格式化参数
         * @param data
         */
        PostParamFormat(data = {}) {
            return  qs.stringify(data);
        },
    },
    logApi,
    problemApi,
    commonApi
)
