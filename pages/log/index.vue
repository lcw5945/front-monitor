<template>
    <section class="container logContainer">
        <nav-bar></nav-bar>
        <filter-condition :saveFilterConditions="saveFilterConditions" />
        <echarts></echarts>
        <error-list/>
    </section>
</template>
<script>
    import axios from '~plugins/axios'
    import api from '~api';
    import NavBar from '~components/NavBar.vue'
    import ErrorList from '~components/ErrorList.vue'
    import FilterCondition from '~components/FilterCondition.vue'
    import Utils from '~utils/utils'

    import Echarts from '~components/echarts.vue'
    import { mapGetters, mapActions } from 'vuex';

    export default {
        head() {
            return {
                title: '日志列表'
            }
        },
        components: {
            NavBar,
            ErrorList,
            FilterCondition,
            Echarts
        },
        methods: {
            ...mapActions({
                setFilterConditions: 'setFilterConditions'
            }),
            /**
             * 保存筛选条件
             * */
            saveFilterConditions(params) {
                this.setFilterConditions(params)
            }

        }
    }
</script>
<style scoped>
    .title {
        margin: 30px 0;
    }

    .users {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .user {
        margin: 10px 0;
    }
    .logContainer{
        padding-top: 90px;
    }
</style>