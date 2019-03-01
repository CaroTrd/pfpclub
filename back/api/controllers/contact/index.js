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
  let name = req.body.namecontact;
  let email = req.body.emailcontact;
  mailgun.messages().send({
    from: "PFP Club <postmaster@sandbox58a7914da99b4f7dac464d460d556111.mailgun.org>", // Expediteur
    to: "Deer Pablo <projetpfb@gmail.com>,"+ email, // Destinataires
    subject: req.body.subjectcontact, // Sujet
    text: "Bonjour," + " " + name + " vous a posé une question." + " Message: " + req.body.message
      + " E-mail: " + email + " "
      + "Téléphone: " + req.body.phonecontact,
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