<template>
    <div class='select-box' @click=''>
        <div class='selectVal' @click.stop='selectProject'>
            <img :class='selectVal.project_iconName+"ImgBg"' :src="selectVal.project_icon" alt="">
            <span>{{selectVal.project_name}}</span>
        </div>
        <div class='dropDown' v-show='showDropDown'>
            <ul>
                <li v-for="item in dataList" :key="item._id" @click='changeSelectVal(item)'>
                    <span><img :class='item.language.name+"ImgBg"' :src="item.language.icon" alt="">{{item.name}}</span>
                    <span class='editProject' @click.stop='toEditProject(item._id)'><Icon type="edit"></Icon></span>
                </li>
            </ul>
            <div class='create-btn'>
                <nuxt-link :to="{ path: '/project' }">
                    新建项目
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import api from '~api'
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['getVal'],
    data() {
        return {
            selectVal: {
                project_id: '',
                project_icon: '',
                project_iconName: '',
                project_name: '',
            },
            dataList: [],
            showDropDown: false
        }
    },
    computed: {
        ...mapGetters({
            getProject: 'getProject',
        })
    },
    components: {},
    methods: {
        ...mapActions({
            setProjectId: 'setProjectId',
        }),
        changeSelectVal(val) {
            this.selectVal = {
                project_id: val._id,
                project_icon: val.language.icon,
                project_iconName: val.language.name,
                project_name: val.name
            }
            if (this.$route.path == '/debug') {
                this.getVal(val.pj_key)
            } else {
                this.setProjectId(this.selectVal)
                this.$router.push({ path: '/log' })
            }
            this.showDropDown = false
        },
        selectProject() {
            this.showDropDown = !this.showDropDown
        },
        toEditProject(id){
            this.$router.push({path:'/project',query:{id}})
        },
        addDocAction() {
            if (this.showDropDown) this.showDropDown = false;
        }
    },
    created() {
        this.dataList = this.getProject.projectList
        this.selectVal = this.getProject
        if (this.$route.path == '/debug') {
            this.getVal(this.getProject.project_key)
        }
    },
    mounted() {
        let _this = this;
        document.removeEventListener("click", this.addDocAction, false);
        document.addEventListener("click", this.addDocAction, false);
    }
}
</script>