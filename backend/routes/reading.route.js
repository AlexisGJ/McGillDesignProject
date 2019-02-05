const express = require('express');
const router = express.Router();

// Require the controllers
const reading_controller = require('../controllers/reading.controller');

// A simple test url to check that all of our files are communicating correctly.
router.get('/test', reading_controller.test);

// Get latest reading by collection number
router.get('/:collectionNumber', reading_controller.reading_details);

module.exports = router;