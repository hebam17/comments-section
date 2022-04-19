const Comment = require("../models/Comment");
const User = require("../models/User");

exports.getComments = async (req, res) => {
  try {
    let comments = await Comment.find({}).populate([
      "user",
      {
        path: "replies",
        populate: { path: "user", model: "User" },
      },
    ]);
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

exports.addReply = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    const newReply = await new Comment(req.body);
    newReply.createdAt = Date.now();
    comment.replies.push(newReply);
    const updatedComment = await Comment.findOneAndUpdate(
      {
        _id: comment._id,
      },
      { replies: comment.replies, timestamps: true },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//
exports.updateReplay = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const comment = await Comment.findById(req.params.commentId);
    let reply = comment.replies.filter((rep) => {
      return rep._id.toString() === req.params.replyId;
    })[0];

    if (user._id.equals(reply.user)) {
      const newReply = { ...reply, ...req.body };

      comment.replies.splice(comment.replies.indexOf(reply), 1, newReply);
      const newComment = await Comment.findByIdAndUpdate(
        {
          _id: comment._id,
        },
        { replies: comment.replies },
        {
          new: true,
          upsert: true,
        }
      );

      res.status(200).json(newComment);
    } else {
      res.status(403).json("You can only update your own reply!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteReply = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const comment = await Comment.findById(req.params.commentId);
    let reply = comment.replies.filter((rep) => {
      return rep._id.toString() === req.params.replyId;
    })[0];

    if (user._id.equals(reply.user)) {
      comment.replies.splice(comment.replies.indexOf(reply), 1);
      const newComment = await Comment.findByIdAndUpdate(
        {
          _id: comment._id,
        },
        { replies: comment.replies },
        {
          new: true,
          upsert: true,
        }
      );

      res.status(200).json("deleted successfully");
    } else {
      res.status(403).json("You can only delete your own reply!");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};
