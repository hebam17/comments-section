const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

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
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
