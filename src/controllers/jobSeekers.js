const JobSeeker = require('../models/JobSeeker');

exports.createJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.create(req.body);
    res.status(201).json(jobSeeker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findById(req.params.id);
    if (!jobSeeker) return res.status(404).json({ error: 'Job seeker not found' });
    res.json(jobSeeker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobSeeker) return res.status(404).json({ error: 'Job seeker not found' });
    res.json(jobSeeker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByIdAndDelete(req.params.id);
    if (!jobSeeker) return res.status(404).json({ error: 'Job seeker not found' });
    res.json({ message: 'Job seeker deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
