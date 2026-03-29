const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [String]
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: [String]
});

module.exports = mongoose.model('User', userSchema);