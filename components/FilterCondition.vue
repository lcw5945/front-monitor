<template>
    <div class='filterCondition-box'>
        <Icon type="navicon-round"></Icon>
        <Tag color="#80848f" v-for="(item,index) in tagValue" :key="index" :name="item[0].value" closable @on-close="handleClose(index,item[0].value)">{{ item[0].label }}:{{item[1].label}}</Tag>
        <Cascader v-show='conditionList.length!=0' :data="conditionList" @on-change="changeData" trigger="hover" v-model='selectValue'></Cascader>
    </div>
</template>
<script>
    import { conditionList } from '~constant/env';

    export default{
        data (){
            return {
                conditionList: conditionList,//筛选条件
                tagValue: [],//Tag 的 value
                selectValue:[],//选择框的value 一直为空
                selectData:[],//已经选择的筛选条件
                showSelect:true,
                filterConditions:{
                    env:'',
                    status:''
                }
            }
        },
        props:['saveFilterConditions'],
        components: {},
        methods: {
            handleClose(index,name){
                this.filterConditions[name] = ''

                this.tagValue.splice(index,1)
                let selectIndex = _.findIndex(this.selectData, {"value": name})
                this.conditionList.push(this.selectData[selectIndex])
                this.selectData.splice(selectIndex,1)
            },
            changeData(value,selectedData){
                this.filterConditions[selectedData[0]['value']] = selectedData[1].value

                this.selectValue = []
                let selectIndex = _.findIndex(this.conditionList, {"value": value[0]})
                this.selectData.push(this.conditionList[selectIndex])
                this.conditionList.splice(selectIndex,1)
                this.tagValue.push(selectedData)

            }
        },
        mounted(){

        },
        watch: {
            filterConditions:{
                handler(e){
                    this.saveFilterConditions(this.filterConditions)
                },
                deep: true
            },
            tagValue: {
                handler(e) {},
                deep: true
            },
        }
    }

</script>