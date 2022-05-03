import { useState, useEffect, useRef } from "react";
import Scores from "./Scores";
import Info from "./Info";
import Reply from "./Reply";
import Delete from "./Delete";
import Update from "./Update";
import Edit from "./Edit";
import NewComment from "./NewComment";
import {
  handleReply,
  handleReplyActive,
  handleEditComment,
  handleUpdateReply,
  handleCancelDelete,
  handleConfirmDeleteReply,
} from "../utils";

import { DeleteModal } from "./DeleteModal";

export default function Replies({ reply, currentUser, commentUser, comment }) {
  const [text, setText] = useState(reply.content);
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

  const setTextFinal = (text) => {
    let arr = text.split(`@${commentUser} `);
    setText(arr[1]);
  };

  const handleText = (e) => {
    setTextFinal(e.target.value);
  };

  const handleDeleteModal = () => {
    console.log("deleteRef:", deleteRef);
    setDisplayModal("block");
    deleteRef.current.style.display = "block";
  };

  return (
    <>
      <DeleteModal
        ref={deleteRef}
        handleCancelDelete={() =>
          handleCancelDelete(setDisplayModal, deleteRef)
        }
        handleConfirmDeleteReply={() =>
          handleConfirmDeleteReply(
            currentUser,
            comment,
            reply,
            setDisplayModal,
            deleteRef
          )
        }
      />

      <div>
        <div className="comment ">
          <div className="comment-scores">
            <Scores
              score={reply.score}
              currentUser={currentUser}
              commentId={reply._id}
            />
          </div>
          <div className="comment-info">
            <div className="comment-controllers">
              {currentUser.username === reply.user.username ? (
                <div className="info-co">
                  <Info
                    profileUser="you"
                    user={reply.user}
                    createdAt={reply.createdAt}
                  />
                </div>
              ) : (
                <div className="info-co">
                  <Info
                    profileUser="user"
                    user={reply.user}
                    createdAt={reply.createdAt}
                  />
                </div>
              )}
              <div className="tools">
                {currentUser.username === reply.user.username ? (
                  <div className="comment-delete">
                    <Delete handleDeleteModal={handleDeleteModal} />
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
            <div className="text text-reply">
              <textarea
                name="comment"
                value={`@${commentUser} ${text}`}
                readOnly={true}
                onChange={handleText}
                ref={textRef}
              />
              <div className="invisible">{`@${commentUser} ${text}`}</div>
            </div>
            {update && (
              <div className="comment-update">
                <Update
                  handleUpdateReply={() =>
                    handleUpdateReply(reply, comment, currentUser, text)
                  }
                />
              </div>
            )}
          </div>
        </div>
        {replyComment && (
          <NewComment
            currentUser={currentUser}
            reply={true}
            handleReplyActive={(txt) =>
              handleReplyActive(setReplyComment, txt, reply, currentUser)
            }
          />
        )}
      </div>
    </>
  );
}
