<template>
    <div class='header-box'>
        <span>
            <nuxt-link :to="{ path: '/' }">
                首页
            </nuxt-link>
        </span>
        <span>|</span>
        <span @click='setInitProject'>
            <nuxt-link :to="{ path: '/log' }">
                日志列表
            </nuxt-link>
        </span>
        <span>|</span>
        <span @click='setInitProject'>
            <nuxt-link :to="{ path: '/debug' }">
                控制台
            </nuxt-link>
        </span>
    </div>
</template>
<script>
    import api from '~api'
    import { mapGetters, mapActions } from 'vuex';

    export default{
        computed: {
            ...mapGetters({
                getProject: 'getProject',
            })
        },
        methods:{
            ...mapActions({
                setProjectId:'setProjectId'
            }),
            setInitProject(){
                if(this.getProject.projectList.length > 0){
                    let firstProject = this.getProject.projectList[0]
                    let initData = {
                        project_id: firstProject._id,
                        project_icon: firstProject.language.icon,
                        project_iconName: firstProject.language.name,
                        project_name: firstProject.name,
                        project_key : firstProject.project_key
                    }
                    this.setProjectId(initData)
                }
            }
        }

    }

</script>
