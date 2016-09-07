var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

// configure app to use ejs for templates
app.set('view engine', 'ejs');

// tell our server where our static files live.
var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Create an array
var todoList = [
    "buy milk",
    "do laundry",
    "add semicolons"
];

app.get('/', function(req, res) {
  // use sendFile to render the index page
  // render assumes there is a folder called `views/`
  // with a file called 'index.ejs' (or whatever string we pass in)
  res.render('index', {todos: todoList});
});

app.get('/todos', function(req, res) {
  console.log(req.body);
  res.send(todoList);
});

app.post('/todos', function(req, res) {
  console.log(req.body.item);
  todoList.push(req.body.item);
  res.redirect('/');
});

app.listen(3000);
