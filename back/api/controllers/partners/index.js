const connexion = require('../../connexions/db');
var express = require('express');
var partnersRoutes = express.Router();



/* List ambassador */

partnersRoutes.get('/test', function (req, res, next) {
  connexion.query(`SELECT category_name, category_id FROM categories`, (err, results) => {
    console.log(err)
    if (err) {
      res.status(500).send('Erreur lors de la récupération');
    } else {
      res.json(results);
    }
  })
})

partnersRoutes.get('/partners', function (req, res, next) {
  connexion.query(`SELECT name, logo, description, category_name, type FROM companies AS co 
  JOIN companies_categories AS cc ON cc.company_id=co.company_id 
  JOIN categories AS ca ON ca.category_id = cc.category_id 
  JOIN partners AS pa ON pa.company_id = co.company_id INNER 
  JOIN partners_types ON partnership_type_id=pa.partnership_type 
  WHERE co.company_status=1 ORDER BY partnership_type DESC`, (err, results) => {
      console.log(err)
      if (err) {
        res.status(500).send('Erreur lors de la récupération');
      } else {
        res.json(results);
      }
    })
})

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
