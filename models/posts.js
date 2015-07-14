var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostsSchema = new Schema({
  word: String,
  definition: String
});

var Posts = mongoose.model('Phrase', PostsSchema);

module.exports = Posts;