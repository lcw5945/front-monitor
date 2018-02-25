/**
 * Created by VULCAN on 2018/2/8.
 */
/**
 * Created by VULCAN on 2018/1/5.
 */
import axios from '~/plugins/axios';

export default {
    getStateSum(data){
        return axios.get('/api/state/sum',this.GetParamFormat(data));
    }
}