<template>
    <div class='debugEnv-box'>
        <Icon type="ios-eye"></Icon>
        环境：
        <Select v-model="selectVal.value" @on-change="setData" style="width:200px" clearable class='envSelect'>
            <Option v-for="item in env" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
        类型：
        <Select v-model="logType" @on-change="setData" style="width:200px" clearable class='logTypeSelect'>
            <Option v-for="(item ,index) in logTypeList" :value="item" :key="index">{{item}}</Option>
        </Select>
        <Checkbox v-model="showType" @on-change="setData">显示字段类型</Checkbox>
        <Checkbox v-model="tagClose" @on-change="setData">闭合标签</Checkbox>
        <Checkbox v-model="showIndex" @on-change="setData">显示INDEX</Checkbox>
    </div>
</template>
<script>
import { debugEnv } from '~constant/env';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            env: debugEnv,
            logTypeList: ['all', 'debug', 'log', 'info', 'warn', 'error'],
            selectVal: {
                value: 'development',
                label: '开发'
            },
            logType: 'all',
            showType: false,
            tagClose: false,
            showIndex: false,
            val: {
                env: '',
                logType: '',
                showType: false,
                tagClose: false,
                showIndex: false
            }
        }
    },
    props: ['getVal'],
    components: {},
    methods: {
        setData() {
            this.val = {
                env: this.selectVal.value,
                logType: this.logType,
                showType: this.showType,
                tagClose: this.tagClose,
                showIndex: this.showIndex
            }
            this.getVal(this.val)
        }
    },
    created() {
        this.setData()
    }
}
</script>
<style scoped>
</style>