var mongoose = require('mongoose');

// create schema
var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

var Genre = module.exports = mongoose.model('Genre',genreSchema)

// Get genreSchema

module.exports.getGenres =  function (callback, limit) {
  Genre.find(callback).limit(limit);
}
