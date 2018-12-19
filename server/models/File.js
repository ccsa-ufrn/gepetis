const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
  filename: {
    type: String,
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
  },
  file_owner:{
    type: Schema.ObjectId,
  }
});



module.exports = mongoose.model('File', FileSchema);;
