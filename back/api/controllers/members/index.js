const connexion = require('../../connexions/db');
var express = require('express');
var membersRoutes = express.Router();
// var api_key = "";
// var domain = "";;
// var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });


// Member registration forms


//Get Member on page Home

membersRoutes.get('/newmembers', function (req, res) {
  connexion.query('SELECT member_id, first_name, last_name, text, pictures FROM `members` WHERE member_status=1 AND affiliation_date >= NOW() - INTERVAL 1 MONTH', function (err, results) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log(results)
      res.status(200).json(results)
    }
  })
});

module.exports = membersRoutes;