var exp = require('express');
var handle = require('express-handlebars');
var route = require('./routes/routes.js');

var app = exp();





app.set('view engine','handlebars');
app.engine('handlebars',handle({defaultLayout:'main'}));

app.use(exp.static(__dirname+'/public'));

app.get('/',route.home);
app.get('/:city',route.city);

var port = process.env.port || 3000;
app.listen(port);