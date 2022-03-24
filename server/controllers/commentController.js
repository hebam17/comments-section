const Comment = require("../models/Comment");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const newComment = await comment.save();
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.updateComment = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("commentId:", typeof req.params.commentId);
    const comment = await Comment.findById(req.params.commentId.trim());
    if (comment.userId === userId) {
      const updatedComment = await Comment.findOneAndUpdate(
        {
          _id: comment._id,
        },
        { ...req.body },
        {
          new: true,
          upsert: true,
        }
      );
      res.status(200).json(updatedComment);
    } else {
      res.status(403).json("You can only update your own comment!");
    }
  } catch (err) {
    res.status(500).json(err.message);
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
    res.status(500).json(err.message);
  }
};

exports.upVote = async (req, res) => {
  try {
    const userId = req.params.userId;
    const comment = await Comment.findById(req.params.commentId.trim());
    if (!(comment.userId === userId)) {
      const updatedComment = await Comment.findOneAndUpdate(
        {
          _id: comment._id,
        },
        { score: ++comment.score },
        {
          new: true,
          upsert: true,
        }
      );
      res.status(200).json(updatedComment);
    } else {
      res.status(403).json("You can't upvote your own comment!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.downVote = async (req, res) => {
  try {
    const userId = req.params.userId;
    const comment = await Comment.findById(req.params.commentId.trim());
    if (!(comment.userId === userId)) {
      const updatedComment = await Comment.findOneAndUpdate(
        {
          _id: comment._id,
        },
        { score: --comment.score },
        {
          new: true,
          upsert: true,
        }
      );
      res.status(200).json(updatedComment);
    } else {
      res.status(403).json("You can't downvote your own comment!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};
