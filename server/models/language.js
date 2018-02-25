/**
 * Created by user on 2018/1/10.
 */
import baseModel from './base-model'
import _ from 'lodash'
import mongoose from 'mongoose'

const LanguageSchema = new mongoose.Schema({
    name:String,
    icon:String
}, {versionKey: false})

LanguageSchema.statics = _.merge(baseModel, {})

export default mongoose.model('language', LanguageSchema, 'languages')