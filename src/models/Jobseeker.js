const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  skills: [String],
  location: String,
});

module.exports = mongoose.model('JobSeeker', jobSeekerSchema);
