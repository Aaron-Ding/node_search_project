var express = require('express');
var bodyParser = require('body-parser');
var todocontrollers = require('./controllers/todocontrollers')
var app = express();
app.set('view engine','ejs');
app.use(express.static('./asset'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

todocontrollers(app);

app.listen(3000);
console.log('3000 port listen');