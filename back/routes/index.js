const connexion = require('../helpers/conf.js');
var express = require('express');
var routes = express.Router();
const nodemailer = require("nodemailer");

routes.get('/ambassadors', function(req, res){
    connexion.query(`SELECT hobbies.hobby_id, pictures, hobby_name, first_name, last_name, phone, email FROM members INNER JOIN ambassadors ON members.member_id = ambassadors.member_id INNER JOIN hobbies ON ambassadors.hobby_id = hobbies.hobby_id`, (err, results) => {
        if(err){
            res.status(500).send('Erreur lors du chargement des catégories');
        }else{
            res.status(200).json({results});
        }
    })
})

module.exports = routes;