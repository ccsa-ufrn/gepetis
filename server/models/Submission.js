
const mongoose = require('mongoose');
// const Author = require('../models/Submission');
const Event = require('../models/Event');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Author: [
      {
        type: String,
        required:true
       }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    event: [
      { type: Schema.Types.ObjectId, ref: 'Event' }
    ],


});

// const User =

module.exports = mongoose.model('users', UserSchema);;
