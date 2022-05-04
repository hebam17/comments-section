const axios = require("axios");

export const handleReply = (setReplyComment) => {
  setReplyComment(true);
};

export const handleReplyActive = async (
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

export const handleComment = async (text, setText, currentUser) => {
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

export const handleEditComment = (textRef, setUpdate) => {
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

export const handleUpdateComment = async (comment, currentUser, text) => {
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

export const handleUpdateReply = async (reply, comment, currentUser, text) => {
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

export const handleDeleteModal = (setDisplayModal, deleteRef) => {
  console.log("deleteRef:", deleteRef);
  setDisplayModal("block");
  deleteRef.current.style.display = "block";
};

export const handleCancelDelete = (setDisplayModal, deleteRef) => {
  setDisplayModal("none");
  deleteRef.current.style.display = "none";
};

export const _handleConfirmDeleteComment = async (
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

export const handleConfirmDeleteReply = async (
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
