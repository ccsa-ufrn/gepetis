const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

var mongoose = require('mongoose');

const Submission_model = mongoose.model('submission');

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

  module.exports = router;

