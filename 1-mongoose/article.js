const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  aurthor: {type: String, require: true},
  body: String,
  comments: [{body: String, commandDate: Date}],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// first argument, is what we are naming our collection
// mongodb I belive will lowercase, and plurarize

module.exports = mongoose.model('Article', articleSchema);
