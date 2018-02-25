<template>
    <div class='errorList-box'>
        <ul class="error-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
            <Affix :offset-top="140">
                <div class="error-item clearfix title">
                    <div style='width: 60px'>序号</div>
                    <div class='first'> </div>
                    <div>状态</div>
                    <div @click='sortError("start_time")'>
                        时间
                        <Icon type="arrow-up-c" :class='[ (sortType.sortName == "start_time" && sortType.sortRule == 1) ? "sortActive" : "" ]'></Icon>
                        <Icon type="arrow-down-c":class='[ (sortType.sortName == "start_time" && sortType.sortRule == -1) ? "sortActive" : "" ]'></Icon>
                    </div>
                    <div @click='sortError("number_occurence")'>
                        事件数
                        <Icon type="arrow-up-c" :class='[ (sortType.sortName == "number_occurence" && sortType.sortRule == 1) ? "sortActive" : "" ]'></Icon>
                        <Icon type="arrow-down-c" :class='[ (sortType.sortName == "number_occurence" && sortType.sortRule == -1) ? "sortActive" : "" ]'></Icon>
                    </div>
                    <div @click='sortError("number_user")'>
                        用户数
                        <Icon type="arrow-up-c" :class='[ (sortType.sortName == "number_user" && sortType.sortRule == 1) ? "sortActive" : "" ]'></Icon>
                        <Icon type="arrow-down-c" :class='[ (sortType.sortName == "number_user" && sortType.sortRule == -1) ? "sortActive" : "" ]'></Icon>
                    </div>
                    <div>环境</div>
                </div>
            </Affix>
            <li class="error-item clearfix" v-for="(item,index) in dataList" :key="item._id" @click='toDetail(item)'>
                <div style='width: 60px'>{{index+1}}</div>
                <div class='first errorName'>
                    <span><b>{{item.name}}</b>&nbsp;&nbsp;&nbsp;{{item.url}}</span>
                    <span>{{item.message}}</span>
                    <span>{{getPostTime(item.start_time)}}-{{getPostTime(item.latest_time)}}</span>
                </div>
                <div class='status'>
                    <Icon color='#ed3f14' v-if='item.status=="open"' type="help-circled" title='未解决'></Icon>
                    <Icon color='#19be6b' v-if='item.status=="resolved"' type="checkmark-circled" title='已解决'></Icon>
                    <Icon color='rgb(110, 88, 226)' v-if='item.status=="ignore"' type="close-circled" title='忽略'></Icon>
                </div>
                <div>{{item.latest_time}}</div>
                <div>{{item.number_occurence}}</div>
                <div>{{item.number_user}}</div>
                <div>{{item.envInfo}}</div>
            </li>
        </ul>
        <div class='nomore' v-if='nomore' style="margin-top:20px;text-align: center;">
            <Icon type="social-dropbox-outline" size='100' color='#b2bac2' v-if='limit != 0 && dataList.length == 0'></Icon>
            <br>
            <div style="font-size:18px" v-if='limit != 0 && dataList.length == 0'>暂无数据!</div>
            <div style="font-size:14px;" v-else>没有更多了！</div>
        </div>
    </div>
</template>
<script>
    import api from '~api'
    import Utils from '~utils/utils'
    import { mapGetters, mapActions } from 'vuex';

    export default{
        data (){
            return {
                dataList: [],
                skip:0,//不是页码！！！！
                limit:10,//每页显示多少条
                nomore:false,
                getListAjax:true,
                sortType:{
                    sortName: 'start_time',
                    sortRule: -1
                },
                filterTime:{
                    grid:1,
                    format:'d'
                }
            }
        },
        computed: {
            ...mapGetters({
                getProject: 'getProject',
                getPastTime: 'getPastTime',
                getFilterConditions: 'getFilterConditions'
            })
        },
        components: {},
        methods: {
            ...mapActions({
                setProblemRecord:'setProblemRecord'
            }),
            async getRecordList() {
                if(this.getProject.project_id && this.getListAjax){
                    this.getListAjax = false;

                    let obj = {}
                    obj[this.sortType.sortName] = this.sortType.sortRule
                    let params = Object.assign({},this.getFilterConditions,{project_id:this.getProject.project_id})
                    let data = await api.getRecordList({skip:this.skip,limit:this.limit,sortType:obj,params,filterTime:this.filterTime})
                    let doc = api.parse(data)
                    doc.forEach((item, index) => {
//                        item.start_time = Utils.getPostTime(item.start_time)
//                        item.latest_time = Utils.getPostTime(item.latest_time)

                        switch (item.env){
                            case 'development':
                                item.envInfo = '开发'
                                break
                            case 'testing':
                                item.envInfo = '测试'
                                break
                            case 'preproduction':
                                item.envInfo = '预上线'
                                break
                            case 'production':
                                item.envInfo = '线上'
                                break
                            default:
                                break
                        }
                    });
                    this.dataList.push(...doc)

                    if(doc.length<this.limit) this.nomore = true

                    this.skip = this.skip + this.limit;
                    if (doc.length === this.limit) this.getListAjax = true;
                }
            },
            getPostTime(time){
                return Utils.getPostTime(time)
            },
            loadMore(){
                if(!this.nomore){
                    this.getRecordList()
                }
            },
            sortError(sortRule){
                if(sortRule == this.sortType.sortName){
                    if(this.sortType.sortRule == -1){
                        this.sortType.sortRule = 1
                    }else {
                        this.sortType.sortRule = -1
                    }
                }else {
                    this.sortType.sortName = sortRule
                }
            },
            toDetail(detail){
                this.setProblemRecord(detail)
                this.$router.push({ path: '/log/problem' })
            },
            initPage(){
                this.dataList = []
                this.skip = 0
                this.nomore = false
                this.getListAjax = true
                this.getRecordList()
            },
            getFilterTime(num){
                switch (num){
                    case 1:
                        this.filterTime.grid = 24
                        this.filterTime.format = 'h'
                        break
                    case 2:
                        this.filterTime.grid = 7
                        this.filterTime.format = 'd'
                        break
                    case 3:
                        this.filterTime.grid = 30
                        this.filterTime.format = 'd'
                        break
                    case 4:
                        this.filterTime.grid = 12
                        this.filterTime.format = 'month'
                        break
                    default:
                        break
                }
            }
        },
        created(){
            this.getFilterTime(this.getPastTime)
            this.getRecordList()
        },
        watch: {
            getProject:{
                handler(e) {
                    this.initPage()
                },
                deep: true
            },
            getFilterConditions:{
                handler(e) {
                    this.initPage()
                },
                deep: true
            },
            nomore:{
                handler(e) {},
                deep: true
            },
            sortType:{
                handler(e) {
                    this.initPage()
                },
                deep: true
            },
            getPastTime:{
                handler(e) {
                    this.initPage()
                    this.getFilterTime(this.getPastTime)
                    this.getRecordList()
                },
                deep: true
            }
        }
    }

</script>