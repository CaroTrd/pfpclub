const mysql      = require('mysql');
require('dotenv').config();
const connexion = mysql.createConnection({
  host     : `localhost`,
  port     : `8889`,
  user     : `root`, //completer avec vos infos
  password : `21MiCarinO`, //completer avec vos infos
  database : `pfpclub` //completer avec vos infos
});

module.exports  =  connexion;