const commentRoute = require("express").Router();

const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
  upVote,
  downVote,
} = require("../controllers/commentController");

// Read comments and replies
commentRoute.get("/all", getComments);

// Create commnets and Replies
commentRoute.post("/", createComment);

// Update a comment and reply
commentRoute.put("/:userId/:commentId", updateComment);

// Delete a comment and reply
commentRoute.delete("/:userId/:commentId", deleteComment);

// upvote a comment
commentRoute.put("/:userId/:commentId/upvote", upVote);

// downvote a comment
commentRoute.put("/:userId/:commentId/downvote", downVote);
module.exports = commentRoute;
