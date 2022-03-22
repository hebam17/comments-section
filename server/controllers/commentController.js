const Comment = require("../models/Comment");

exports.getComments = (req, res) => {
  try {
    const comments = Comment.get;
  } catch (err) {
    res.status(500).json(err.send);
  }
};

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const newComment = await comment.save();
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.send);
  }
};
exports.updateComment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (comment.userId === userId) {
      const newComment = await comment.updateOne({ $set: req.body });
      res.status(200).json(newComment);
    } else {
      res.status(403).json("You can only update your own comment!");
    }
  } catch (err) {
    res.status(500).json(err.send);
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (comment.userId === userId) {
      await comment.deleteOne();
      res.status(200).json("The comment was successfully deleted!");
    } else {
      res.status(403).json("You can only delete your own comment!");
    }
  } catch (err) {
    res.status(500).json(err.send);
  }
};

exports.upVote = () => {};

exports.downVote = () => {};
