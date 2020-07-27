import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthday:{
        type: Date,
        required: true
    },
    nickname:{
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    genre: String,
    creationdate: {
        type: Date,
        default: Date.now
    }

})

export interface Iuser extends mongoose.Document{
    name: string,
    lastname: string,
    email: string,
    birthday: Date,
    nickname: string,
    password: string,
    genre?: string
}