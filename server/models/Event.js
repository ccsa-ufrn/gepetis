const Submission = require('../models/Submission');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = new Schema({
    title: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    about:{
        type: String,
        required: true
    },
    cover: {
      data: Buffer, contentType: String,
      required: false
     },
    submissions:[
      { type: Schema.Types.ObjectId,
       ref: 'submission',
       required:false,},

     ],
});

// const User =

module.exports = mongoose.model('Event', Event);;
