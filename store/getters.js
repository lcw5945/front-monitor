export default {
    getProject: state => {
        return state.project
    },
    getFilterConditions: state => {
        return state.filterConditions
    },
    getProblemRecord: state => {
        return state.problem_record
    },
    getEcharts: state => state.echarts,
    getPastTime: state => state.pastTime
}