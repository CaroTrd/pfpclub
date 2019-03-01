const mysql      = require('mysql');
require('dotenv').config();
const connexion = mysql.createConnection({
  host     : `${process.env.REACT_DATABASE_HOST}`,
  port     : `${process.env.REACT_DATABASE_PORT}`,
  user     : `${process.env.REACT_DATABASE_USER}`, //completer avec vos infos
  password : `${process.env.REACT_DATABASE_KEY}`, //completer avec vos infos
  database : `${process.env.REACT_DATABASE_NAME}` //completer avec vos infos
});

module.exports  =  connexion;