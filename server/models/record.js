/**
 * Created by user on 2018/1/10.
 */
import baseModel from './base-model'
import _ from 'lodash'
import mongoose from 'mongoose'

const RecordSchema = new mongoose.Schema({
    project_id:String,
    name:String,
    url:String,
    script_url:String,
    env:String,
    message:String,
    start_time:String,
    latest_time:String,
    number_occurence:Number,
    number_user:Number,
    users: Array,
    status:String
}, {versionKey: false})

RecordSchema.statics = _.merge(baseModel, {
    fetchPage: function(skip, limit, cb, sortType, conditions = {}) {
        return this
            .find(conditions)
            .skip(skip)
            .limit(limit)
            .sort(sortType)
            .exec(cb);
    },
})

export default mongoose.model('record', RecordSchema, 'records')