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

exports.handleEditComment = (textRef, setUpdate) => {
  textRef.current.readOnly = false;
  textRef.current.focus();
  textRef.current.selectionStart = textRef.current.value.length;
  setUpdate(true);
  textRef.current.parentNode.classList.add("text-edit");
};

// try {
//   await axios.put(`/comments/${currentUser._id}/${comment._id}`, {
//     content: text,
//   });
//   window.location.reload(true);
// } catch (err) {
//   console.log(err.message);
// }

exports.handleUpdateComment = async (comment, currentUser, text) => {
  console.log(comment, currentUser);
  try {
    await axios.put(`/comments/${currentUser._id}/${comment._id}`, {
      content: text,
    });
    window.location.reload(true);
  } catch (err) {
    console.log(err.message);
  }
};

exports.handleUpdateReply = async (reply, comment, currentUser, text) => {
  console.log(comment, currentUser);
  try {
    await axios.put(
      `/comments/reply/${currentUser.username}/${comment._id}/${reply._id}`,
      {
        content: text,
      }
    );
    window.location.reload(true);
  } catch (err) {
    console.log(err.message);
  }
};

exports.handleDeleteModal = (setDisplayModal, deleteRef) => {
  console.log("deleteRef:", deleteRef);
  setDisplayModal("block");
  deleteRef.current.style.display = "block";
};

exports.handleCancelDelete = (setDisplayModal, deleteRef) => {
  setDisplayModal("none");
  deleteRef.current.style.display = "none";
};

exports._handleConfirmDeleteComment = async (
  currentUser,
  comment,
  setDisplayModal,
  deleteRef
) => {
  try {
    await axios.delete(`/comments/${currentUser._id}/${comment._id}`);
    console.log("deleted successfully!");
    setDisplayModal("none");
    deleteRef.current.style.display = "none";
    window.location.reload(true);
  } catch (err) {
    console.log(err);
  }
};

exports.handleConfirmDeleteReply = async (
  currentUser,
  comment,
  reply,
  setDisplayModal,
  deleteRef
) => {
  try {
    await axios.delete(
      `/comments/reply/${currentUser.username}/${comment._id}/${reply._id}`
    );
    console.log("deleted successfully!");
    setDisplayModal("none");
    deleteRef.current.style.display = "none";
    window.location.reload(true);
  } catch (err) {
    console.log(err);
  }
};
