const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
var contactRoutes = require('./api/controllers/contact/index');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/contact', contactRoutes);

let  server  =  app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});