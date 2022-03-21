const router = require("express").Router();

const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// Read comments and replies
router.get("/:userId/comment/all", getComments);

// Create commnets and Replies
router.post("/:userId/comment", createComment);

// Update a comment and reply
router.put("/:userId/comment/:commentId", updateComment);

// Delete a comment and reply
router.delete("/:userId/comment/:commentId", deleteComment);

module.exports = router;
