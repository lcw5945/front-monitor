<template>
    <div class="index-box">
        <img src="img/index/home_page.png" alt="">
        <div class="error">
            <p>全栈JavaScript错误监控</p>
            <div>
                累计处理错误 <span>{{ problemSum }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '~api';
    import Utils from '~utils/utils'

    export default {
        async asyncData({ req, query }) {
            let data = await api.getProblemSum();
            let problemSum = api.parse(data);
            return { problemSum }
        },
        head() {
            return {
                title: '盒饭调试系统'
            }
        },
        methods: {
            linkScoket() {
                let _this = this
                let socHost = process.env.NODE_ENV == 'development' ?
                    'ws://localhost.hefantv.com:9011' :
                    'ws://47.93.89.11:9011'
                let ws = new WebSocket(socHost)
                // 打开Socket
                ws.onopen = function(e) {
                    console.log('Connection to server opened')
                }

                // 监听消息
                ws.onmessage = function(event) {
                    let data = JSON.parse(event.data)
                    let paserData = data.data
                    if (data.action === '4002') _this.problemSum = paserData.data
                }
                // 监听Socket的关闭
                ws.onclose = function(event) {
                    console.log('Client notified socket has closed', event)
                }

            },
        },
        mounted(){
            this.linkScoket()
        },
    }
</script>
<style scoped>

    .index-box {
        height: calc(100vh - 50px);
        background-color: #00A680;
    }

    img {
        width: 100%;
    }

    .error {
        position: fixed;
        top: 300px;
        left: 200px;
    }
    .error > p {
        font-size: 40px;
        color: #fff;
        line-height: 1;
        margin-bottom: 20px;
    }
    .error > div {
        font-size: 20px;
        color: #fff;
        line-height: 1;
    }

    .error > div > span {
        font-size: 30px;
        color: #F1EF36;
        letter-spacing: 5px;
        vertical-align: -3px;
    }

</style>