const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
  filename: {
    type: String,
    required: true
  },
  log_entry: {
    type: Date,
    default: Date.now
  },
  file_path: {
    type: String,

  },
  file_type: {
    type: String,

  },
  file_size:{
    type: Number,
  }
});



module.exports = mongoose.model('File', FileSchema);;
