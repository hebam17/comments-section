const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Sorry but you should write something!"],
    },
    score: {
      type: Number,
      default: 0,
    },
    type: { type: String, enum: ["comment", "reply"], default: "comment" },
    replies: { type: Array, default: [] },
    userId: {
      type: String,
      min: 3,
      max: 7,
      required: [true, "This is required!"],
      unique: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
