const mysql      = require('mysql');
const connexion = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'root', //completer avec vos infos
  password : '', //completer avec vos infos
  database : '' //completer avec vos infos
});
module.exports  =  connexion;