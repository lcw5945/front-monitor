// import { stat } from "fs";

export default {
    SET_PROJECTID(state, data) {
        state.project.project_id = data.project_id
        state.project.project_icon = data.project_icon
        state.project.project_name = data.project_name
        state.project.project_iconName = data.project_iconName
        state.project.project_key = data.project_key
    },
    SET_PROJECTLIST(state, data) {
        console.log(state);
        state.project.projectList = data
    },
    SET_FILTERCONDITIONS(state, data) {
        state.filterConditions = Object.assign({}, state.filterConditions, data)
    },
    ADD_VISIT(state, path) {
        state.router.path = path
        console.log('state -->', state)
    },
    UPDATE_PROBLEMRECORD(state, data) {
        state.problem_record = data
    },
    UPDATE_ECHARTS(state, data) {
        state.echarts = data
    },
    UPDATE_PASTTIME(state, data) {
        state.pastTime = data
    },
}