const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        minLength:8,
        required: true,
    },
    role: {
        type: String,
        default: 'CITIZEN',
        enum: ['CITIZEN', 'MANAGER'],
        required: true,
    }
});
module.exports = mongoose.model('User', UserSchema);
