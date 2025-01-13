const Application = require('../models/Application');

exports.getAnalytics = async (req, res) => {
  try {
    const mostAppliedJobs = await Application.aggregate([
      { $group: { _id: '$jobId', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    res.json({ mostAppliedJobs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
