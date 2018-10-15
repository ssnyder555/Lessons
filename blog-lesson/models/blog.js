const mongoose = require('mongoose');

const aurthorSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Author', aurthorSchema);
