var express = require('express');
var app = express();
var connect = require('connect');
app.use(connect.cookieParser());
app.use(connect.session({secret: 'demo'}));
app.set('port', (process.env.PORT || 5000));
// default route
app.get('/', function(req, res) {
      // write session.name
      res.end('Name: ' + req.session.name + '\n');
});

app.get('/set/:name', function(req, res) {
      // set session.name based on url name
      req.session.name = req.params.name;
      res.redirect('/');
});

app.get('/clear', function(req, res) {
      // delete session.name
      delete req.session.name;
      res.redirect('/');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});