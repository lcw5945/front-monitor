<template>
    <div class='selectPJ-box'>
        <select-project></select-project>
        <span>|</span>
        <span class='errorList-btn'>
            <nuxt-link :to="{ path: '/log' }">
                错误列表
            </nuxt-link>
        </span>
    </div>
</template>
<script>
    import api from '~api'
    import { mapGetters, mapActions } from 'vuex';
    import SelectProject from '~components/SelectProject.vue'

    export default{
        data (){
            return {
                selectVal:"",
                dataList:[]
            }
        },
        computed: {
            ...mapGetters({
                getProject: 'getProject',
            })
        },
        components: {
            SelectProject,
        },
        methods: {
            ...mapActions({
                setProjectId: 'setProjectId',
            }),
            changeSelectVal(val){
                this.setProjectId(val)
            }
        },
        created(){
            this.dataList = this.getProject.projectList
            this.selectVal = this.getProject.project_id
        },
        mounted(){

        },
        watch: {}
    }

</script>

