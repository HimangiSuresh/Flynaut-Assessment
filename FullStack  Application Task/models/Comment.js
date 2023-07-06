const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  // Other fields
});

module.exports = mongoose.model('Comment', commentSchema);
