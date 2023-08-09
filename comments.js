// Create web server

// Import express
const express = require('express');

// Import controller
const commentsController = require('../controllers/commentsController');

// Create router
const router = express.Router();

// Get all comments
router.get('/', commentsController.getAllComments);

// Get comment by id
router.get('/:id', commentsController.getCommentById);

// Create comment
router.post('/', commentsController.createComment);

// Update comment
router.put('/:id', commentsController.updateComment);

// Delete comment
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;