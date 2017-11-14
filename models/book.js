var mongoose = require('mongoose');

// create schema
var bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  publisher: {
    type: String
  },
  pages: {
    type: String
  },
  image_url: {
    type: String
  }
})

var Book = module.exports = mongoose.model('Books',bookSchema)

// Get genreSchema

module.exports.getBooks =  function (callback, limit) {
  Book.find(callback).limit(limit);
}
