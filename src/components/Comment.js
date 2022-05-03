import { useState, useEffect, useRef } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Info from "./Info";
import Replies from "./Replies";
import Reply from "./Reply";
import Scores from "./Scores";
import NewComment from "./NewComment";
import Update from "./Update";
import {
  handleReply,
  handleReplyActive,
  handleEditComment,
  handleUpdateComment,
  handleDeleteModal,
  handleCancelDelete,
  handleConfirmDeleteComment,
} from "../utils";
import { DeleteModal } from "./DeleteModal";

export default function Comment({ comment, currentUser }) {
  const [text, setText] = useState(comment.content);
  const [replyComment, setReplyComment] = useState(false);
  const [update, setUpdate] = useState(false);
  const [displayModal, setDisplayModal] = useState("");
  const textRef = useRef();
  const deleteRef = useRef();
  useEffect(() => {
    if (deleteRef) {
      try {
        window.onclick = (e) => {
          if (e.target.isEqualNode(deleteRef.current.firstElementChild)) {
            setDisplayModal("none");
            deleteRef.current.style.display = "none";
          }
        };
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [deleteRef, displayModal]);

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <DeleteModal
        ref={deleteRef}
        handleCancelDelete={() =>
          handleCancelDelete(setDisplayModal, deleteRef)
        }
        handleConfirmDeleteComment={() =>
          handleConfirmDeleteComment(
            currentUser,
            comment,
            setDisplayModal,
            deleteRef
          )
        }
      />
      <div>
        <div className="comment">
          <div className="comment-scores">
            <Scores
              score={comment.score}
              currentUser={currentUser}
              commentId={comment._id}
            />
          </div>
          <div className="comment-info">
            <div className="comment-controllers">
              {currentUser.username === comment.user.username ? (
                <div className="info-co">
                  <Info
                    profileUser="you"
                    user={comment.user}
                    createdAt={comment.createdAt}
                  />
                </div>
              ) : (
                <div className="info-co">
                  <Info
                    profileUser="user"
                    user={comment.user}
                    createdAt={comment.createdAt}
                  />
                </div>
              )}

              <div className="tools">
                {currentUser.username === comment.user.username ? (
                  <div className="comment-delete">
                    <Delete
                      handleDeleteModal={() =>
                        handleDeleteModal(setDisplayModal, deleteRef)
                      }
                    />
                    <Edit
                      handleEditComment={() => {
                        handleEditComment(textRef, setUpdate);
                      }}
                    />
                  </div>
                ) : (
                  <div className="comment-reply">
                    <Reply handleReply={() => handleReply(setReplyComment)} />
                  </div>
                )}
              </div>
            </div>
            <div className="text">
              <textarea
                name="comment"
                value={text}
                readOnly={true}
                onChange={handleText}
                ref={textRef}
              />
              <div className="invisible">{text}</div>
            </div>
            {update && (
              <div className="comment-update">
                <Update
                  handleUpdateComment={() =>
                    handleUpdateComment(comment, currentUser, text)
                  }
                />
              </div>
            )}
          </div>
        </div>
        {replyComment && (
          <NewComment
            currentUser={currentUser}
            handleReplyActive={(txt) => {
              handleReplyActive(setReplyComment, txt, comment, currentUser);
            }}
            reply
          />
        )}
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <Replies
              currentUser={currentUser}
              commentUser={comment.user.username}
              reply={reply}
              key={reply.id || reply._id}
              comment={comment}
              handleReplyActive={(txt) => {
                handleReplyActive(setReplyComment, txt);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
