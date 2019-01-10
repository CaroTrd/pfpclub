const connexion = require('../helpers/db.js');
var express = require('express');
var routes = express.Router();
const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "projetpfb@gmail.com",
    pass: "4wcsjecode"
  }
});

routes.get('/demandes', function (req, res, next) {
  connexion.query(`SELECT * FROM members`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération');
    } else {
      res.json({ data: results });
    }
  })
})

routes.get('/information/:id', function (req, res, next) {
  var ID = req.params.id;
  connexion.query(`SELECT * from members where ID='${ID}'`, function (err, results, fields) {
    if (err) {
      console.log(err)
      return res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      return res.json(results)
    };
  });
});

routes.post('/personnel', function (req, res, next) {
  var post = req.body;
  connexion.query('INSERT INTO members SET ?', [post], function (err, results, fields) {
    if (err) {
      console.log(err)
      return res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      return res.send('successfully added link')
    };
  });
});

routes.post('/professionnel', function (req, res, next) {
  var post = req.body;
  connexion.query('INSERT INTO entreprises SET ?', [post], function (err, results, fields) {
    if (err) {
      return res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      return res.send('successfully added link')
    };
  }),
    smtpTransport.sendMail({
      from: "Deer Wild <projetpfb@gmail.com>", // Expediteur
      to: "carolinatirado92@gmail.com", // Destinataires
      subject: "Test pfp!", // Sujet
      text: "Hello Formulaire ✔", // plaintext body
      html: "<b>Vous avez une nouvelle demande d'adhérent membre à votre club!</b>" // html body
    }, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: ", response.response);
      }
    });
});

routes.put('/demandes/validation', function (req, res, next) {
  var post = req.body;
  connexion.query(`UPDATE members SET INSCRIT='${post.inscrit}' WHERE ID='${post.id}'`, function (err, results, fields) {
    console.log(err);
    if (err) {
      return res.status(500).send("Erreur lors de la sauvegarde");
    } else {
      return res.send('successfully added link')
    };
  });
});

module.exports = routes;