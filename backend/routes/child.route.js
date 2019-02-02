const express = require('express');
const router = express.Router();

// Require the controllers
const child_controller = require('../controllers/child.controller');


// A simple test url to check that all of our files are communicating correctly.
router.get('/test', child_controller.test);

module.exports = router;