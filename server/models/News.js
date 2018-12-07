const Submission = require('../models/Submission');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle:{
      type: String,
      required:true
    },
    content:{
      type: String,
      required: true
    },
    date: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },

});



module.exports = mongoose.model('Event', Event);;
