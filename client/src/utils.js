const axios = require("axios");

exports.handleReply = (setReplyComment) => {
  setReplyComment(true);
};

exports.handleReplyActive = async (
  setReplyComment,
  text,
  comment,
  currentUser
) => {
  try {
    await axios.put(`/comments/reply/${comment._id}`, {
      content: text,
      type: "reply",
      user: currentUser._id,
    });
    setReplyComment(false);
    window.location.reload(true);
  } catch (err) {
    console.log(err.message);
  }
};

exports.handleComment = async (text, setText, currentUser) => {
  console.log(text);
  console.log(currentUser);
  try {
    await axios.post("/comments/", {
      content: text,
      type: "comment",
      user: currentUser._id,
    });
    setText("");
    window.location.reload(true);
  } catch (err) {
    console.log(err.message);
  }
};
