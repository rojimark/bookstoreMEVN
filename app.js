var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Genre = require('./models/genre')
var Book = require('./models/book')

mongoose.connect('mongodb://localhost/bookstore',{useMongoClient: true, promiseLibrary: global.Promise});
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Please use /api/books or /api/genre');
})

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(err, genres){
    if (err){
      throw err;
    }
    res.json(genres)
  })
})

app.get('/api/books', function(req, res){
  Book.getBooks(function(err, books){
    if (err){
      throw err;
    }
    res.json(books)
  })
})


app.listen(8080);
console.log('running on port 8080');
