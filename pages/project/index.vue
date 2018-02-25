<template>
    <div class='createProject'>
        <h1 v-text='PJTitle'></h1>
        <div class='projectName'>
            <label>
                <span>项目名称：</span>
                <Input v-model="projectName" placeholder="填写项目名称" style="width: 300px"/>
            </label>
        </div>
        <div class='languageBox'>
            <!--<span>选择对应语言:</span>-->
            <ul>
                <li v-for='item in dataList' :class='[ item._id == language ? "active" : "" ]' :key='item._id'
                    @click='chooseLanguage(item._id)'>
                    <span>{{item.name}}</span>
                    <img :src="item.icon" alt="">
                </li>
            </ul>
        </div>

        <Button class='createBtn' size="large" @click='commitProject'>确 定</Button>
    </div>
</template>
<script>
    import api from '~api'
    import {mapGetters, mapActions} from 'vuex';

    export default{
        async asyncData({}){
            let data = await api.getLanguageList()
            let dataList = api.parse(data)
            let language = ""
            if (dataList.length > 0) {
                language = dataList[0]._id
            }

            return {
                dataList,
                language
            }
        },
        head() {
            return {
                title: '创建项目'
            }
        },
        data (){
            return {
                projectName: '',
                PJTitle: '创建项目',
                PJ_id: this.$route.query['id']
            }
        },
        computed: {
            ...mapGetters({
                getProject: 'getProject',
            })
        },
        methods: {
            chooseLanguage(id){
                this.language = id
            },
            async commitProject(){
                let data = null
                if (this.PJ_id) {
                    data = await api.updateAddProject({name: this.projectName, language: this.language,id:this.PJ_id}).catch(() => {
                        this.$Message.error("修改失败");
                    })
                } else {
                    data = await api.updateAddProject({name: this.projectName, language: this.language}).catch(() => {
                        this.$Message.error("创建失败");
                    })
                }

                let doc = api.parse(data)

                if (doc) {
                    this.$Message.success('操作成功');
                    window.location.href = '/log'
//                    this.$router.push({path: '/log'})
                } else {
                    this.$Message.error("操作失败");
                }
            },
            initPage(){
                if (this.PJ_id) {
                    this.PJTitle = '修改项目'
                    let projectList = this.getProject.projectList
                    if (projectList.length > 0) {
                        projectList.map((item) => {
                            if (item._id == this.PJ_id) {
                                this.projectName = item.name
                                this.language = item.language._id
                            }
                        })
                    }
                }
            }
        },
        created(){
            this.initPage()
        },
        watch: {}
    }

</script>
