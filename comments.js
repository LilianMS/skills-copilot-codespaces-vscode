// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const auth = require('../middleware/auth'); // Import middleware 
const { check } = require('express-validator'); // Import express-validator for check errors

// Create comment
// api/comments
router.post('/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('comment', 'Comment must be at least 5 characters').isLength({ min: 5 })
    ],
    commentsController.createComment
);

// Get comments by publication
// api/comments
router.get('/',
    auth,
    commentsController.getComments
);

// Update comment
// api/comments/:id
router.put('/:id',
    auth,
    commentsController.updateComment
);

// Delete comment
// api/comments/:id
router.delete('/:id',
    auth,
    commentsController.deleteComment
); 

module.exports = router;