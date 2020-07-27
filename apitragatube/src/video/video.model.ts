import * as mongoose from 'mongoose';

export const videoSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    reproduct : Number,
    like: {
        type: Number,
        default: 0
    },
    dislike:{
        type: Number,
        default: 0
    },
    dateupload:{
        type: Date,
        default: Date.now
    },
    description: String,
    url:{
        type: String,
        required: true
    }
})

export interface Ivideo extends mongoose.Document{
    name: string,
    like: number,
    dislike: number,
    dateupload: Date,
    description?: string,
    url: string
}