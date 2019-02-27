<<<<<<< HEAD

=======
>>>>>>> a65850c9743f4baf325cc2fe8fd85b0a3772ce21
const mysql      = require('mysql');
const connexion = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root', //completer avec vos infos
  password : '', //completer avec vos infos
  database : 'pfpclub' //completer avec vos infos
});
module.exports = connexion;