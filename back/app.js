const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
var partnersRoutes = require('./api/controllers/partners/index');
var membersRoutes = require('./api/controllers/members/index');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/partners', partnersRoutes);
app.use('/api/members', membersRoutes);
<<<<<<< HEAD

=======
>>>>>>> a65850c9743f4baf325cc2fe8fd85b0a3772ce21
let  server  =  app.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});