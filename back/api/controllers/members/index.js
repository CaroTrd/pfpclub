const connexion = require('../../connexions/db');
var express = require('express');
var membersRoutes = express.Router();
// var api_key = "";
// var domain = "";;
// var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });


// Member registration forms


membersRoutes.post('/inscription/personal', function (req, res, next) {
  connexion.query(`INSERT INTO members (first_name, last_name, birthdate, email, phone, address, city, municipality, zip_code, country, member_status) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.birthdate}', '${req.body.email}', '${req.body.phone}', '${req.body.address}', '${req.body.city}', '${req.body.municipality}', '${req.body.zipcode}', '${req.body.country}', '0')`, function (err, results, fields) {
    if (err) {
      console.log(err.message);
      return res.status(500).json({ server: "Nous avons rencontré un problème lors de la sauvegarde" });
    } else {
      return res.status(200).json({ server: "successfully added link" })
    };
  });
});

/*membersRoutes.post('/inscription/personal', function (req, res, next) {
  mailgun.messages().send({
    from: "", // Expediteur
    to: "Deer Wild <projetpfb@gmail.com>", // Destinataires
    subject: "Vous avez reçu une nouvelle demande d'adhésion sur PFP Club.", // Sujet
    text: "Bonjour Pablo," + req.body.lastname + req.body.firstname + "a introduit une demande afin de rejoindre votre Club.",
  }, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: ", response.response);
    }
  });
  res.send(201, req.params);
});*/

membersRoutes.post('/inscription/professional', function (req, res, next) {
  connexion.query(`INSERT INTO companies (name, manager, vat_numbr, email, phone, address, city, municipality, zip_code, country, website, company_status) VALUES ('${req.body.name}', '${req.body.manager}', '${req.body.vatnumbr}', '${req.body.e_mail}', '${req.body.phone_comp}', '${req.body.address_comp}', '${req.body.city_comp}', '${req.body.municipality_comp}', '${req.body.zipcode_comp}', '${req.body.country_comp}', '${req.body.website}', '0')`, function (err, results, fields) {
    console.log(err);
    if (err) {
      console.log(err.message)
      return res.status(500).json({ flash: "Nous avons rencontré un problème lors de la sauvegarde" });
    } else {
      return res.status(200).json({ flash: "Votre demande a bien éte enregitré." })
    };
  });
});

module.exports = membersRoutes;