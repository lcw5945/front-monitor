<template>
    <div class="echart">
        <ul class="buttons">
            <li @click="getStateSumApi(index +1)" :class="{current:getPastTime === index +1}"
                v-for="(item,index) in list" :key="index">{{ item }}
            </li>
        </ul>
        <chart :options="polar" ref="chart" id="echarts"></chart>
    </div>
</template>

<script>
    import api from '~api'
    import Utils from '~utils/utils'
    import {mapGetters, mapActions} from 'vuex'

    export default{
        data (){
            return {
                polar: {
                    backgroundColor: '#26262E',//背景色
                    title: {
                        text: '',
                        textStyle: {
                            //文字颜色
                            color: '#7CB5EC',
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        textStyle: {color: "#fff"},
                        backgroundColor: "#00C993",
                        formatter: '{b}<br/>{a0}:{c0}'
                    },
                    grid: {
                        x: 45,
                        y: 30,
                        x2: 50,
                        y2: 40,
                        borderWidth: 1
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#65656B'
                            }
                        },
                        axisLabel: {
                            formatter: function (params) {
                                let newParamsName = "";
                                let paramsNameNumber = params.length;
                                let provideNumber = 10;
                                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                                if (paramsNameNumber > provideNumber) {
                                    for (let p = 0; p < rowNumber; p++) {
                                        let tempStr = "";
                                        let start = p * provideNumber;
                                        let end = start + provideNumber;
                                        if (p == rowNumber - 1) {
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;
                                    }
                                } else {
                                    newParamsName = params;
                                }
                                return newParamsName
                            }
                        },
                        data: []
                    },
                    yAxis: {
                        show: false
                    },
                    categoryAxis: {
                        axisTick: {
                            show: false,
                        },
                    },
                    series: {
                        name: '错误',
                        type: 'line',
                        color: ['#7CB5EC'],
                        areaStyle: {
                            normal:{
                                color:{
                                    type:'linear',
                                    x:0,
                                    y:0,
                                    x2:0,
                                    y2:1,
                                    colorStops:[{
                                        offset:0,
                                        color:'rgba(124,181,236,0.8)'
                                    },{
                                        offset:1,
                                        color:'rgba(124,181,236,0)'
                                    }],
                                    globalCoord:false
                                }
                            }
                        },
                        data: []
                    }
                },
                list: ['1天', '7天', '30天', '1年'],
            }
        },
        components: {},
        computed: {
            ...mapGetters({
                getEcharts: 'getEcharts',
                getProject: 'getProject',
                getPastTime: 'getPastTime',
            })
        },
        methods: {
            ...mapActions({
                setPastTime:'setPastTime'
            }),
            /**
             * 自适应屏幕宽度
             **/
            resizeWorldMapContainer(){
                if(document.getElementById('echarts')){
                    document.getElementById('echarts').style.width = window.innerWidth + 'px'
                    document.getElementById('echarts').style.height = '300px'
                    this.$refs.chart.resize()
                }
            },
            async getStateSumApi(num){
                let param = {project_id: this.getProject.project_id},
                    charts = {
                        xAxisData: [],
                        seriesData: [],
                        totalError: '总错误数：0'
                    }
                switch (num) {
                    case 1:
                        param.grid = 24
                        param.format = 'h'
                        break
                    case 2:
                        param.grid = 7
                        param.format = 'd'
                        break
                    case 3:
                        param.grid = 30
                        param.format = 'd'
                        break
                    case 4:
                        param.grid = 12
                        param.format = 'month'
                        break
                    default:
                        break
                }
                this.setPastTime(num)
                let data = await api.getStateSum(param);
                data = api.parse(data);
                let util = Utils
                if (data && data.errorList) {
                    data.errorList.forEach((item, index) => {
                        let str = util.canvasTimeStr(item.time)
                        charts.xAxisData.unshift(str)
                        charts.seriesData.unshift(item.errorNum)
                    })
                    charts.totalError = '总错误数：' + data.totalError
                }
                this.chartOptions(charts)
            },
            chartOptions(data){
                this.$refs.chart.options.xAxis.data = data.xAxisData
                this.$refs.chart.options.series.data = data.seriesData
                this.$refs.chart.options.title.text = data.totalError
            }
        },
        mounted(){
            this.chartOptions(this.getEcharts)
            this.resizeWorldMapContainer()
            window.onresize = () => {
                this.resizeWorldMapContainer()
            }
        },
        watch: {
            getProject: {
                handler(e) {
                    this.getStateSumApi(2)
                },
                deep: true
            }
        }
    }
</script>
<style>
    .buttons {
        position: fixed;
        top: 108px;
        right: 20px;
        z-index: 99;
    }

    .buttons > li {
        float: left;
        font-size: 16px;
        padding: 0 10px;
        color: #78858A;
        cursor: pointer;
        line-height: 1;
    }

    .buttons > .current {
        color: #fff;
    }
</style>