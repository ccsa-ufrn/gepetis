const express = require('express');
const mongoose = require('mongoose');
const File = require('../models/File');
const router = express.Router();
const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage }).single('article'); //to upload files


router.post('/file', (req,res) => {
  const path_file =  './public/images/';
          upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
            console.log(err)
            } else if (err) {
              console.log("unknown error:")
              console.log(err);
            }

            console.log("everything went okay")
            console.log(req.file);
          })
            newFile = new File;
            //newFile.filename  = req.body.filename;
            //newFile.path_file = req.body.path;
            newFile.log_entry = Date.now();
           // newFile.file_type = req.body.mimetype;
           // newFile.file_size = req.body.size;
          //  newFile.file_owner= submission_._id;
            // newFile.filename = 'req.body.filename';
            // newFile.path_file = 'req.body.pat';
            // newFile.log_entry = 'Date.now';
            // newFile.file_type = 'req.body.mimetype';
            // newFile.file_size = req.body.size;
            newFile.save()
            .then(res => {
              res.status(201).send({
                message: "Submissão Enviada"
              });
            })
            .catch(e => {
              res.status(400).send({
                message: "Submissão invalida pq" + e,
              });
            });
            console.log(newFile);
})
module.exports = router;
