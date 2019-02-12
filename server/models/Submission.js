
const mongoose = require('mongoose');
// const Author = require('../models/Submission');
//const Event = require('../models/Event');

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
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
    event: {
       type: Schema.Types.ObjectId,
       ref: 'Event'
    },


});

module.exports = mongoose.model('submission', SubmissionSchema);;
