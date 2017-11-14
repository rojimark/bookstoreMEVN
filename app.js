var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore',{useMongoClient: true, promiseLibrary: global.Promise});
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello Wordl');
})

app.listen(8080);
console.log('running on port 8080');
