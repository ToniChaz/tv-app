var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    cors = require('cors'),
    fs = require('fs');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(cors());
  app.use(app.router);
});


app.get('/', function(req, res) {
  res.send("Tv shows API is ready!");
});

routes = require('./routes/tvshows')(app);

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

app.get('/email', function(req, res) {
  fs.readFile('email.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/email', function(req, res) {
  fs.readFile('email.json', function(err, data) {
    var email = JSON.parse(data);
    email.push(req.body);
    fs.writeFile('email.json', JSON.stringify(email, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(email));
    });
  });
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});