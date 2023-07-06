const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, index: true },
  password: String,
  email: String,
  // Other fields
});

module.exports = mongoose.model('User', userSchema);
