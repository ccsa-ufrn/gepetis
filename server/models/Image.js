const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    log_entry: {
        type: Date,
        default: Date.now
    },
    file_path:{
      type: String,

    },
    file_type:{
      type: String,

    }
});



module.exports = mongoose.model('Image', ImageSchema);;
