const express = require('express');
const mongoose = require('mongoose');
const Submission = require('../models/Submission');
const File = require('../models/File');

const router = express.Router();
const Submission_model = mongoose.model('submission');
const multer = require('multer')
const path = require('path')
// const config = require('/home/ccsa/gepetis-att/server/db.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage }).single('article'); //to upload files
//const GridFsStorage = require('multer-gridfs-storage');


//const upload = multer({ storage });


router.post('/submission', (req, res) => {
  const submission_ = new Submission(req.body);
    submission_.save()
    .then(res => {
      res.status(201).send({
        message: "Submissão Enviada"
      });
    })
    .catch(e => {
      res.status(400).send({
        message: "Submissão inalida"
      });
    });
    res.status(200).send(req.body);
    })



  router.get('/submissions', (req, res) => {
    Submission.find({})
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
      res.status(400).send({
        message: "Erro ao Mostrar"
      });
    });
  });

  router.post('/file',(req,res) =>{
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
      newFile.filename = req.body.filename;
      newFile.path_file = req.body.path;
      newFile.log_entry = Date.now;
      newFile.file_type = req.body.mimetype;
      newFile.file_size = req.body.size;
      newFile.save()
      .then(res => {
        res.status(201).send({
          message: "Submissão Enviada"
        });
      })
      .catch(e => {
        res.status(400).send({
          message: "Submissão invvalida"
        });
      });
      console.log(newFile);
  })

  module.exports = router;

