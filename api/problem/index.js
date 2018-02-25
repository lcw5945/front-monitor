/**
 * Created by user on 2018/2/8.
 */
import axios from '~/plugins/axios';

export default {
    getProblemList(data){
        return axios.get('/api/problemList',this.GetParamFormat(data));
    },

    getProblemSum(data){
        return axios.get('/api/problemSum',this.GetParamFormat(data));
    },

}