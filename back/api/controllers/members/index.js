const connexion = require('../../connexions/db');
var express = require('express');
var membersRoutes = express.Router();
require('dotenv').config();
var api_key = `${process.env.REACT_MAILGUN_API_KEY}`;
var domain = `${process.env.REACT_MAILGUN_DOMAIN}`;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

// Get Member on page Home

membersRoutes.get('/newmembers', function(req, res){
  connexion.query('SELECT member_id, first_name, last_name, text, pictures FROM `members` WHERE member_status=1 AND affiliation_date >= NOW() - INTERVAL 1 MONTH', function (err, results){
    if(err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log(results)
      res.status(200).json(results)
    }
  })
});

// Get list of TVA on database

membersRoutes.get('/vatnumbr', function(req, res){
  connexion.query('SELECT name, legal_form, manager, vat_numbr, email, phone, address, city, municipality, zip_code FROM companies', function (err, results){
    if(err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log(results)
      res.status(200).json(results)
    }
  })
});

// Member registration forms

membersRoutes.post('/inscription/personal', function (req, res) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let birthdate = req.body.year + '-' + req.body.month + '-' + req.body.day;
  let phone = req.body.code + req.body.phone;
  let address = req.body.number + ' ' + req.body.street;
  let source = '';
  let rules = '';
  let private_data = '';
  if (req.body.facebook === true) {
    source = "facebook";
  }
  if (req.body.friend === true) {
    source = "ami(e)";
  } 
  if (req.body.other === true) {
    source = "autre";
  }
  if (req.body.rules === true) {
    rules = 1;
  } else {
    rules = 0;
  }
  if (req.body.private_data) {
    private_data = 1;
  } else {
    private_data = 0;
  }

connexion.query(`INSERT INTO members (first_name, last_name, birthdate, email, phone, address, city, municipality, zip_code, country, source, rules, private_data, member_status) VALUES ('${firstname}', '${lastname}', '${birthdate}', '${email}', '${phone}', '${address}', '${req.body.city}', '${req.body.municipality}', '${req.body.zipcode}', '${req.body.country}', '${source}', '${rules}', '${private_data}', '0')`, async function (err) {
    if (err) {
      console.log(err.message);
      res.status(500).json({ server: "Nous avons rencontré un problème lors de la sauvegarde" });
    } else {
      res.status(200).json({ server: "successfully added link" });
      try {
        await mailgun.messages().send({
          from: "PFP Club <postmaster@sandbox58a7914da99b4f7dac464d460d556111.mailgun.org>", // Expediteur
          to: "Deer Wild <projetpfb@gmail.com>," + email, // Destinataires
          subject: "Nouvelle demande d'adhésion sur PFP Club.", // Sujet
          text: "Bonjour Pablo," + " " + firstname + " " + lastname + " " + "vous a envoyé une demande d'adhésion sur votre page PFPClub.",
        });
      } catch (err) {
        console.log(err)
      } try {
        await mailgun.messages().send({
          from: "PFP Club <postmaster@sandbox58a7914da99b4f7dac464d460d556111.mailgun.org>", // Expediteur
          to: "Deer" + " " +  firstname + ", " + email, // Destinataires
          subject: "Nouvelle demande d'adhésion sur PFP Club.", // Sujet
          text: "Bonjour" + " " + firstname + " " + lastname + ", " + "Nous avons bien reçu votre demande d'inscription. Nous reviendrons vers vous dans les plus brefs délais. L'équipe PFP CLub.",
        });
      } catch (err) {
        console.log(err)
      }
    }
  });
});

/**/

membersRoutes.post('/inscription/professional', function (req, res) {
  let address_comp = req.body.number_comp + ' ' + req.body.street_comp;
  let vatnumbr = req.body.vatcode + ' ' + req.body.vatnumbr;
  let phone_comp = req.body.phone_code + ' ' + req.body.phone_comp;
  connexion.query(`INSERT INTO companies (name, legal_form, manager, vat_numbr, email, phone, address, city, municipality, zip_code, company_status) VALUES ('${req.body.name_comp}', '${req.body.legal_form}', '${req.body.position}', '${vatnumbr}', '${req.body.e_mail}', '${phone_comp}', '${address_comp}', '${req.body.city_comp}', '${req.body.municipality_comp}', '${req.body.zipcode_comp}', '0')`, function (err) {
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