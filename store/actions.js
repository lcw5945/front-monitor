export default {
    setProjectId: (context, type = '') => {
        context.commit('SET_PROJECTID', type)
    },
    setFilterConditions: async(context, type = '') => {
        context.commit('SET_FILTERCONDITIONS', type)
    },
    setProblemRecord: async(context, data = {}) => {
        context.commit('UPDATE_PROBLEMRECORD', data)
    },
    setEcharts: async(context, data = {}) => {
        context.commit('UPDATE_ECHARTS', data)
    },
    setPastTime: async(context, data = {}) => {
        context.commit('UPDATE_PASTTIME', data)
    },
}