<template>
    <div>
        <nav-bar></nav-bar>
        <div class="recordContainer">
            <div class="header">
                <div class="errorInfo">
                    <p>
                        <span>{{record.name}}</span> {{ record.url}}
                    </p>
                    <p>{{ record.message}}</p>
                    <p>{{ formateDate(record.start_time)}} ~ {{ formateDate(record.latest_time)}}</p>
                </div>
                <div class="errorNum">
                    <div class="event">
                        <h4>{{ record.number_occurence }}</h4>
                        <p>事件数</p>
                    </div>
                    <div class="user">
                        <h4>{{ record.number_user }}</h4>
                        <p>用户数</p>
                    </div>
                    <div class="evn">
                        <h4>{{ envList[record.env] }}</h4>
                        <p>版本</p>
                    </div>
                </div>
            </div>

            <div class="box clearfix">
                <div class="problemList clearfix">
                    <div class="title" >
                        <div @click="freshData">
                            <Icon type="refresh"size="30px"></Icon>
                        </div>
                        事件列表
                    </div>
                    <ul>
                        <li v-for="obj,index in problemList"
                            :key="'pro'+index"
                            :class="{active: activeIndex == index }"
                            @click="problemHandler(index)"
                        >
                            <div class="proHeader">
                                {{obj.name}}
                                <span>{{ formateDate(obj.create_time,'M月d日')}}</span>
                            </div>
                            <p class="TextTruncate">
                                {{obj.message}}
                            </p>
                            <div class="proFooter">
                                <span>{{ obj.ip_info&&obj.ip_info.province}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="tip">
                        <div class="loadData" v-if="loadStatus == 0" @click="loadData()">
                            点击加载数据
                        </div>
                        <Spin size="large" v-if="loadStatus == 1"></Spin>
                    </div>
                </div>
                <div class="info">
                    <div class="title">基本信息</div>
                    <div class="info-box" v-if="problem">
                        <div class="conLeft">
                            <!--概要信息-->
                            <div class="block-box">
                                <p>
                                    概要信息
                                </p>
                                <ul>
                                    <li>
                                        <span>时间</span><span>{{ formateDate(problem.create_time,'yyyy年MM月dd日 h点m分s秒') }}</span>
                                    </li>
                                    <li>
                                        <span>类型</span><span>{{ getProblemType(problem.message)}}</span>
                                    </li>
                                    <li>
                                        <span>Title</span><span>{{ problem.name }}</span>
                                    </li>
                                    <li>
                                        <span>URL</span><span>{{ problem.url }}</span>
                                    </li>
                                    <li v-if="problem.script_url">
                                        <span>script_url</span><span>{{ problem.script_url }}</span>
                                    </li>
                                </ul>
                            </div>
                            <!--堆栈信息-->
                            <div class="block-box stackInfo">
                                <p>
                                    堆栈信息
                                </p>
                                <ul>
                                    <li>
                                        <span>{{ problem.stack_info&&problem.stack_info.message }}</span>
                                    </li>
                                    <li class="stack">
                                        <span>{{ problem.stack_info&&problem.stack_info.stack  }}</span>
                                    </li>

                                </ul>
                            </div>
                            <!--错误信息 接口报错-->
                            <div class="block-box" v-if="problem.error_info&&problem.error_info.path">
                                <p>
                                    错误信息
                                </p>
                                <ul>
                                    <li>
                                        <span>method</span><span>{{ problem.error_info.method  }}</span>
                                    </li>
                                    <li>
                                        <span>url</span><span>{{ problem.error_info.path }}</span>
                                    </li>
                                    <li v-if="problem.error_info.params">
                                        <span>params</span><span>{{ problem.error_info.params }}</span>
                                    </li>
                                    <li v-if="problem.error_info.query">
                                        <span>query</span><span>{{ problem.error_info.query }}</span>
                                    </li>
                                    <li>
                                        <span>message</span><span>{{ problem.error_info.message }}</span>
                                    </li>
                                    <li>
                                        <span>status</span><span>{{ problem.error_info.status }}</span>
                                    </li>
                                    <li>
                                        <span>stack</span><span>{{ problem.error_info.stack }}</span>
                                    </li>

                                </ul>
                            </div>
                            <!--错误信息 页面报错-->
                            <div class="block-box" v-if="problem.error_info&&problem.error_info.errorMessage">
                                <p>
                                    错误信息
                                </p>

                                <ul>
                                    <li>
                                        <span>信息</span><span>{{ problem.error_info.errorMessage.msg }}</span>
                                    </li>
                                    <li>
                                        <span>文件</span><span>{{ problem.error_info.scriptURI.msg }}</span>
                                    </li>
                                    <li>
                                        <span>行号</span><span>{{ problem.error_info.lineNumber.msg }}</span>
                                    </li>
                                    <li>
                                        <span>列号</span><span>{{ problem.error_info.columnNumber.msg }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="conRight">
                            <!--服务器信息 接口报错-->
                            <div class="block-box" v-if="problem.server_info">
                                <p>
                                    服务器信息
                                </p>
                                <ul>
                                    <li >
                                        <span>主机名</span><span>{{ problem.server_info.hostname  }}</span>
                                    </li>
                                    <li >
                                        <span>IP</span><span>{{ problem.server_info.ip  }}</span>
                                    </li>
                                    <li>
                                        <span>node版本</span><span>{{ problem.server_info.nodeVersion  }}</span>
                                    </li>
                                    <li>
                                        <span>操作系统</span><span>{{ problem.server_info.platform  }}   {{ problem.server_info.release  }}</span>
                                    </li>
                                </ul>
                            </div>
                            <!--设备信息 页面报错-->
                            <div class="block-box deviceInfo" v-else>
                                <p>
                                    设备信息
                                </p>
                                <ul>
                                    <template >
                                        <li>
                                            <span>浏览器</span>
                                            <span>{{ problem.browser_name }}</span>
                                            <span>{{ problem.browser_version }}</span>
                                        </li>
                                        <li>
                                            <span>设备</span>
                                            <span>{{ problem.device_name }}</span>
                                            <span></span>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                            <!--位置信息-->
                            <div class="block-box" v-if="problem.ip_info">
                                <p>
                                    位置信息
                                </p>
                                <ul>
                                    <li>
                                        <span>IP</span><span>{{ problem.ip_info && problem.ip_info.ip  }}</span>
                                    </li>
                                    <li>
                                        <span>地点</span><span>{{ problem.ip_info && problem.ip_info.province  }}</span>
                                    </li>
                                </ul>
                            </div>
                            <!--其他信息-->
                            <div class="block-box">
                                <p>
                                    其他信息
                                </p>
                                <ul>
                                    <li v-if="problem.error_info&&problem.error_info.mobileInfo">
                                        <span>userAgent</span><span>{{  problem.error_info.mobileInfo.msg.userAgent }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import api from '~api';
    import Utils from '~utils/utils';
    import {mapGetters, mapActions} from 'vuex';
    import {env} from '~constant/params';
    import NavBar from '~components/NavBar.vue'
    export default {
        head() {
            return {
                title: '错误详情'
            }
        },
        data() {
            return {
                problemList: [], // 问题列表
                problem: '', // 当前的问题
                envList: env, // 环境变量
                skip: 0, // 数据查询 跳过几条
                limit: 20, // 数据查询 每页几条
                activeIndex: 0, // 当前的索引
                loadStatus:0, // 0 表示默认状态，表示还有数据 1表示正在加载数据 2表示没有数据
            }
        },
        components: {
            NavBar
        },
        computed: {
            ...mapGetters({
                record: 'getProblemRecord' // 得到record
            })
        },
        methods: {
            /*
             * 点击加载数据
             * */
            loadData(){
                this.loadStatus = 1
                this.getProblemList()
            },
            /*
             * api 查看问题列表
             * */
            async getProblemList(){
                let {project_id, script_url, url, env} = this.record
                let condition = {
                    skip: this.skip,
                    limit: this.limit,
                    projectid: project_id,
                    url,
                    script_url,
                    env
                }
                let res = await api.getProblemList(condition).catch((e) => {
                    console.log(e)
                })
                let data = api.parse(res)

                if (data && data.length > 0) {
                    this.problemList.push(...data)
                    if(data.length < this.limit ){
                        this.loadStatus = 2 // 没有数据了
                    }else{
                        this.loadStatus = 0 // 还有数据
                    }
                    if (this.skip == 0) {
                        this.problem = this.problemList[0] //设置
                    }
                    this.skip += this.limit

                }else{
                    this.loadStatus = 2
                }
            },
            freshData(){
                this.skip = 0
                this.problemList = []
                this.getProblemList()
            },
            /*
            * 得到问题的类型
            * */
            getProblemType(msg=''){
                if(msg.includes(":")){
                    return msg.split(':')[0]
                }
                return msg
            },
            /*
             * 根据索引查看问题
             * */
            problemHandler(index){
                this.activeIndex = index
                this.problem = this.problemList[index]
            },
            /*
             * 格式化时间
             * */
            formateDate(date, rule = 'yyyy-MM-dd h:m'){
                return Utils.format(date, rule)
            },
        },
        mounted() {
            this.getProblemList()
        },
        watch: {}
    }
</script>