const express = require('express');
const router = express.Router();

// Require the controllers
const child_controller = require('../controllers/child.controller');

// A simple test url to check that all of our files are communicating correctly.
router.get('/test', child_controller.test);

// Create child
router.post('/create', child_controller.child_create);

// Create child
router.get('/all', child_controller.child_show_all);

// Get child by id
router.get('/:id', child_controller.child_details);

// Update child by id
router.put('/:id/update', child_controller.child_update);

// Delete child by id
router.delete('/:id/delete', child_controller.child_delete);

module.exports = router;