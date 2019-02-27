const connexion = require('../../connexions/db');
var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var contactRoutes = express.Router();
var api_key = process.env.REACT_MAILGUN_API_KEY;
var domain = process.env.REACT_MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

contactRoutes.use(cors())
contactRoutes.use(bodyParser())

contactRoutes.post('/message', (req, res, next) => {
  mailgun.messages().send({
    from: "", // Expediteur
    to: "Deer Wild <projetpfb@gmail.com>", // Destinataires
    subject: req.body.subjectcontact, // Sujet
    text: "Name:" + req.body.namecontact
      + "E-mail:" + req.body.emailcontact
      + "Téléphone:" + req.body.phonecontact
      + "Message:" + req.body.message,
  }, (err, res) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log("Message sent:", res)
    };
  });
  res.status(200).send(req.params);
});

module.exports = contactRoutes;