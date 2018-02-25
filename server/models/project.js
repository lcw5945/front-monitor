/**
 * Created by user on 2018/1/10.
 */
import baseModel from './base-model'
import _ from 'lodash'
import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    name:String,
    pj_key:String,
    language: {type: mongoose.Schema.ObjectId, ref: 'language'},
    icon: String,
    create_time:String,
    update_time:String
}, {versionKey: false})

ProjectSchema.statics = _.merge(baseModel, {
    refFetch: async function ( cb, sortType = 'create_time', conditions = {}) {
        return this
            .find(conditions)
            .populate([{
                path: 'language',
            }])
            .sort({[sortType]: 'desc'})
            .exec(cb);
    },
})

export default mongoose.model('project', ProjectSchema, 'projects')