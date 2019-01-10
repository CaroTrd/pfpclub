const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
let routes = require('./routes/index.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/formulaire', routes); 

let  server  =  app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});