
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    cover: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref:''
    }],

});

// const User =

module.exports = mongoose.model('users', UserSchema);;
