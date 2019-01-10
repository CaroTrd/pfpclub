const mysql      = require('mysql');
const connexion = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'root',
  password : 'root23',
  database : 'pfp'
});
module.exports  =  connexion;