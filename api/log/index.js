/**
 * Created by VULCAN on 2018/1/5.
 */
import axios from '~/plugins/axios';

export default {
    getLogList(data){
        return axios.get('/api/getLogList',this.GetParamFormat(data));
    },
    getLogDetails(data){
        return axios.get('/api/getLogDetails',this.GetParamFormat(data));
    },
    getProjectList(data){
        return axios.get('/api/getProjectList',this.GetParamFormat(data));
    },
    getRecordList(data){
        return axios.get('/api/getRecordList',this.GetParamFormat(data));
    },
    updateAddProject(data){
        return axios.post('/api/updateAddProject',this.PostParamFormat(data));
    },
    getLanguageList(data){
        return axios.get('/api/getLanguageList',this.GetParamFormat(data));
    }
}