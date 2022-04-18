const commentRoute = require("express").Router();

const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
  upVote,
  downVote,
  addReply,
  updateReplay,
  deleteReply,
} = require("../controllers/commentController");

// Read comments and replies
commentRoute.get("/all", getComments);

// Create comments and Replies
commentRoute.post("/", createComment);

// add a reply
commentRoute.put("/reply/:commentId", addReply);

// update a reply
commentRoute.put("/reply/:username/:commentId/:replyId", updateReplay);

// delete a reply
commentRoute.delete("/reply/:userId/:commentId/:replyId", deleteReply);

// Update a comment
commentRoute.put("/:userId/:commentId", updateComment);

// Delete a comment
commentRoute.delete("/:userId/:commentId", deleteComment);

// upvote a comment
commentRoute.put("/:userId/:commentId/upvote", upVote);

// downvote a comment
commentRoute.put("/:userId/:commentId/downvote", downVote);

module.exports = commentRoute;
