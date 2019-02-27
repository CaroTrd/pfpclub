const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
var  server  =  require('http').createServer(app);
var membersRoutes = require('./api/controllers/members/index');
var partnersRoutes = require('./api/controllers/partners/index');
var contactRoutes = require('./api/controllers/contact/index');
var ambassadorRoutes = require('./api/controllers/ambassadors/index');
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/api/members', membersRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ambassadors', ambassadorRoutes);

server.listen( process.env.PORT  ||  4000, function(){
    console.log('Listening on port '  +  server.address().port);
});