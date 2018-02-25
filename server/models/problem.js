/**
 * Created by user on 2018/1/10.
 */
import baseModel from './base-model'
import _ from 'lodash'
import mongoose from 'mongoose'

const ProblemSchema = new mongoose.Schema({
    project_id:String,
    name:String,
    url:String,
    script_url:String,
    env:String,
    message:String,
    browser_name:String,
    browser_version:String,
    device_name:String,
    error_info:Object,
    stack_info:Object,
    ip_info:Object,
    server_info:Object,
    create_time:String
}, {versionKey: false})

ProblemSchema.statics = _.merge(baseModel, {})

export default mongoose.model('problem', ProblemSchema, 'problems')