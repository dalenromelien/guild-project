import mongoose from 'mongoose';
const {Schema} = mongoose;

const messageSchema = new Schema({
    user: String,
    message: String,
    date: {type: Date, default: Date.now}
});