import api from '~api';
import Utils from '~utils/utils'
export default async function({ store }) {
    if (process.server) {
        let { data } = await api.getProjectList().catch((error) => {
                console.error('getProjectList', error)
            }),
            commitList = api.parse(data),
            commitPJ = {
                project_id: '',
                project_name: '',
                project_icon: '',
            },
            stateSum = null,
            echarts = {
                xAxisData: [],
                seriesData: [],
                totalError: '总错误数：0'
            }

        if (commitList.length > 0) {

            commitPJ.project_id = commitList[0]._id
            commitPJ.project_name = commitList[0].name
            commitPJ.project_icon = commitList[0]['language'].icon
            commitPJ.project_iconName = commitList[0]['language'].name
            commitPJ.project_key = commitList[0].pj_key
            store.commit('SET_PROJECTID', commitPJ)
        }
        stateSum = await api.getStateSum({ project_id: commitPJ.project_id })
        stateSum = api.parse(stateSum);
        if (stateSum && stateSum.errorList) {
            stateSum.errorList.forEach((item, index) => {
                let str = Utils.canvasTimeStr(item.time)
                echarts.xAxisData.unshift(str)
                echarts.seriesData.unshift(item.errorNum)
            })
            echarts.totalError = '总错误数：' + stateSum.totalError
        }
        store.commit('UPDATE_ECHARTS', echarts)
        store.commit('SET_PROJECTLIST', commitList)

    }
}