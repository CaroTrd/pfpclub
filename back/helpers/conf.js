const mysql      = require('mysql');
const connexion = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root', //completer avec vos infos
  password : 'vladkiller', //completer avec vos infos
  database : 'pfpclub' //completer avec vos infos
});
module.exports  =  connexion;