const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

var mongoose = require('mongoose');

const Event_model = mongoose.model('Event');

router.post('/event', (req, res) => {
  const event_ = new Submission(req.body);
    event_.save()
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



  router.get('/events', (req, res) => {
    Event.find({})
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
      res.status(400).send({
        message: "Erro ao Mostrar"
      });
    });
  });

  module.exports = router;

