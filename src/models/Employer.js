const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salaryRange: String,
  skills: [String],
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer' },
});

module.exports = mongoose.model('Job', jobSchema);
