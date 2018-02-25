<template>
    <div class="debugbox">
        <div class="debugPJ-box">
            <select-project :getVal='getPJ'></select-project>
        </div>
        <debug-env :getVal="getEnvAndLogType" />
        <div class='conWra' :style='{"height":contentH+"px"}'>
            <div class='content'>
                <div class='contentInner'>
                    <json-paser ref='jsonPaser' :showType='showType' :showIndex='showIndex' :tagClose='tagClose' />
                </div>
            </div>
            <ul class='nav'>
                <Tooltip placement="bottom" v-for='(item,index) in pageList' :key='index'>
                    <li v-text='item' @click='handleNodeClick(item,index)' :class='{"active":selectLi==index}'></li>
                    <div slot="content">
                        {{item}}
                    </div>
                </Tooltip>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import _ from "lodash";
import DebugEnv from '~components/DebugEnv.vue'
import JsonPaser from '~components/JsonPaser.vue'
import SelectProject from '~components/SelectProject.vue'
export default {
    name: 'debug',
    components: {
        SelectProject,
        DebugEnv,
        JsonPaser

    },
    head() {
        return {
            title: `控制台`
        }
    },
    computed: {
        ...mapGetters({
            getProject: 'getProject',
        })
    },
    data() {
        return {
            logList: [],
            pageList: [],
            logshowData: {},
            contentShowList: [],
            PjName: '',
            env: 'development',
            logType: '-1',
            contentH: 0,
            selectLi: -1,
            selectLiName: '',
            errorLimit: 50,
            logLimit: 250,
            showType: false,
            tagClose: false,
            showIndex: false,
            delayTimer: null,
            renderFlag: true,
            msgCount: 0,
            delay: 300,
            webSocket: null
        }
    },
    methods: {
        ...mapActions({
            setFilterConditions: 'setFilterConditions'
        }),
        getPJ(val) {
            this.PjName = val;
        },
        getEnvAndLogType(val) {
            this.env = val.env
            this.logType = val.logType
            this.showType = val.showType
            this.tagClose = val.tagClose
            this.showIndex = val.showIndex
        },
        handleNodeClick(data, index) {
            this.selectLi = index
            this.selectLiName = data
            this.logRender(data)

        },
        filterNode(value, data) {
            if (!value) return true
            return data.title.indexOf(value) !== -1
        },
        dataHandle(paserData) {
            if (!this.PjName && !this.env) return
            if (paserData.pjKey == this.PjName && paserData.env == this.env) {
                paserData.url = paserData.url || '未知URL'
                //if (paserData.pjKey == '09341ad31eeb8a27778d67b1ddde220d' && paserData.env == this.env) {
                //this.logList.push(paserData)
                if (!_.includes(this.pageList, paserData.url)) {
                    this.pageList.push(paserData.url)
                    this.logshowData[paserData.url] = []
                }
                let logTime = new Date(paserData.time)
                this.logshowData[paserData.url]['errorList'] = this.logshowData[paserData.url]['errorList'] || []
                this.logshowData[paserData.url]['list'] = this.logshowData[paserData.url]['list'] || []
                if (paserData.type == 'error') {
                    if (this.logshowData[paserData.url]['errorList'].length > this.errorLimit) {
                        this.logshowData[paserData.url]['errorList'].shift()
                    }
                    this.logshowData[paserData.url]['errorList'].push({ data: paserData.logData, type: paserData.type, time: logTime, timeStamp: paserData.time })
                } else {
                    if (this.logshowData[paserData.url]['list'].length > this.logLimit) {
                        this.logshowData[paserData.url]['list'].shift()
                    }
                    this.logshowData[paserData.url]['list'].push({ data: paserData.logData, type: paserData.type, time: logTime, timeStamp: paserData.time })
                }
                this.msgCount++;
                if (this.renderFlag && this.selectLiName) {
                    this.renderFlag = false
                    if (this.delayTimer) {
                        clearTimeout(this.delayTimer)
                    }
                    //this.delayTimer = null

                    this.delayTimer = setTimeout(() => {
                        this.logRender(this.selectLiName)
                        this.renderFlag = true
                        let t = 300;
                        if (this.msgCount > 30 && this.msgCount <= 60) {
                            t = 500
                        } else if (this.msgCount > 60 && this.msgCount <= 90) {
                            t = 1000
                        } else if (this.msgCount > 90 && this.msgCount <= 120) {
                            t = 1500
                        } else if (this.msgCount > 120 && this.msgCount <= 150) {
                            t = 2000
                        } else if (this.msgCount > 150 && this.msgCount <= 180) {
                            t = 2500
                        } else if (this.msgCount > 180 && this.msgCount <= 210) {
                            t = 3000
                        } else if (this.msgCount > 210) {
                            t = 4000
                        }
                        this.delay = t
                        this.msgCount = 0

                    }, this.delay)
                }

            }

        },
        logRender(data) {
            if (!this.$refs.jsonPaser) return
            let conArray = [];
            if (this.logshowData[data]['errorList'].length > this.logshowData[data]['list'].length) {
                conArray = this.logshowData[data]['errorList'].concat(this.logshowData[data]['list'])
            } else {
                conArray = this.logshowData[data]['list'].concat(this.logshowData[data]['errorList'])
            }
            conArray = _.orderBy(conArray, 'timeStamp', 'desc');
            if (this.logType != 'all') {
                conArray = _.filter(conArray, o => o.type == this.logType)
            }
            if (this.$refs.jsonPaser) {
                this.$refs.jsonPaser.clear()
            }

            conArray.map((val) => {
                this.$refs.jsonPaser.init(val.data, val.time)
            })
        },
        limitRender(logName) {
            // if (this.logshowData[logName].length > 300) {
            //     this.logshowData[logName].splice(0, 300)
            // }
        },
        linkScoket() {
            let self = this
            let socHost = process.env.NODE_ENV == 'development' ?
                'ws://localhost.hefantv.com:9011' :
                'ws://47.93.89.11:9011'
            this.webSocket = new WebSocket(socHost)
            this.popShow = 0
            // 打开Socket
            this.webSocket.onopen = function(e) {
                console.log('debugpage,Connection to server opened')
            }

            // 监听消息
            this.webSocket.onmessage = function(event) {
                console.log('debugpage,Client received a message', event.data)
                let data = event.data
                let paserData = JSON.parse(data).data
                self.dataHandle(paserData)
            }
            // 监听Socket的关闭
            this.webSocket.onclose = function(event) {
                console.log('Client notified socket has closed', event)
            }

        }
    },
    watch: {
        env(val) {
            this.pageList = []
            this.logshowData = []
            this.selectLiName = ''
            if (this.$refs.jsonPaser) {
                this.$refs.jsonPaser.clear()
            }

        },
        logType(val) {
            if (this.selectLiName) {
                this.logRender(this.selectLiName)
            }
        },
        tagClose(val) {
            if (this.$refs.jsonPaser) {
                this.$refs.jsonPaser.collapse()
            }
        },
        $route(val) {
            console.log(2)
        }
    },
    mounted() {
        this.contentH = document.body.clientHeight - 162;
        this.linkScoket()
    },
    beforeDestroy() {
        this.webSocket.close()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->