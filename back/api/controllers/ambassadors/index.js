const connexion = require('../../connexions/db');
var express = require('express');
var ambassadorRoutes = express.Router();

ambassadorRoutes.get('/ambassadors', function(req, res){
    connexion.query(`SELECT hobby_name, first_name, last_name, phone, email FROM members INNER JOIN ambassadors ON members.member_id = ambassadors.member_id INNER JOIN hobbies ON ambassadors.hobby_id = hobbies.hobby_id`, (err, results) => {
        if(err){
            console.log(err)
            res.status(500).send('Erreur lors du chargement des catégories');
        }else{
            console.log({results})
            res.status(200).json({results});
        }
    })
})

module.exports = ambassadorRoutes;