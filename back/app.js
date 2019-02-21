const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
<<<<<<< HEAD
let routes = require('./routes/index.js');
=======

>>>>>>> 58015d7a93bc6ef588833188568ef5f10628c2c7

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

<<<<<<< HEAD
app.use('/', routes);
=======

>>>>>>> 58015d7a93bc6ef588833188568ef5f10628c2c7

let  server  =  app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});