const express = require('express');
const router = express.Router();
const { createJobSeeker, getJobSeeker } = require('../controllers/jobSeekers');

router.post('/', createJobSeeker);
router.get('/:id', getJobSeeker);

module.exports = router;
