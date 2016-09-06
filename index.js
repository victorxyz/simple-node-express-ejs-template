var express = require('express');
var path = require('path');
var app = express();

// configure app to use ejs for templates
app.set('view engine', 'ejs');

// tell our server where our static files live.
var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.get('/', function(req, res) {
  // use sendFile to render the index page
  // render assumes there is a folder called `views/`
  // with a file called 'index.ejs' (or whatever string we pass in)
  res.render('index', {name: 'Sterling Archer'});
});

app.get('/login/:password', function(req, res) {
    var secretPassword = "goatgoatgoat";
    if (req.params.password === secretPassword) {
      res.render('index', {name: 'Logged in User'});
    } else {
      res.render('index', {name: 'Wrong password'});
    }
});

app.listen(3000);
