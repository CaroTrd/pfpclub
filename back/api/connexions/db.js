const mysql      = require('mysql');
require('dotenv').config();
const connexion = mysql.createConnection({
  host     : '',
  port     : '',
  user     : '', //completer avec vos infos
  password : '', //completer avec vos infos
  database : '' //completer avec vos infos
});

module.exports = connexion;