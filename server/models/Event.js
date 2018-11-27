const Submission = require('../models/Submission');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    about:{
        type: String,
        required: true,
    },
    cover: {
      data: Buffer, contentType: String
     },
    submissions:[
      { type: Schema.Types.ObjectId,
        ref: 'Submissions' }
      ],
});

// const User =

module.exports = mongoose.model('Event', Event);;
