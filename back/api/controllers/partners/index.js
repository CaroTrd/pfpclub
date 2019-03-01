const connexion = require('../../connexions/db');
var express = require('express');
var partnersRoutes = express.Router();

// Partners Level

partnersRoutes.get('/partners-level', function (req, res, next) {
  connexion.query(
    `SELECT name, logo, partner_id, partnership_type FROM partners AS pa 
    JOIN partners_types AS pt ON pt.partnership_type_id=pa.partnership_type 
    JOIN companies AS co ON co.company_id = pa.company_id WHERE company_status = 1`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json("erreur");
      } else {
        console.log(results);
        res.status(200).json(results);
      }
    }
  );
});

module.exports = partnersRoutes;