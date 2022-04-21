import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scores from "./Scores";
import Info from "./Info";
import Reply from "./Reply";
import Delete from "./Delete";
import Edit from "./Edit";
import NewComment from "./NewComment";
import { handleReply, handleReplyActive } from "../utils";
import axios from "axios";

export default function Replies({ reply, currentUser, commentUser }) {
  const [text, setText] = useState(reply.content);
  const [replyComment, setReplyComment] = useState(false);
  const location = useLocation();

  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };

  return (
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
              <div className="info">
                <Info
                  profileUser="you"
                  user={reply.user}
                  createdAt={reply.createdAt}
                />
              </div>
            ) : (
              <div className="info">
                <Info
                  profileUser="user"
                  user={reply.user}
                  createdAt={reply.createdAt}
                />
              </div>
            )}
            {currentUser.username === reply.user.username ? (
              <div className="comment-delete">
                <Delete />
                <Edit />
              </div>
            ) : (
              <div className="comment-reply">
                <Reply handleReply={() => handleReply(setReplyComment)} />
              </div>
            )}
          </div>
          <div className="text text-reply">
            <textarea
              name="comment"
              value={`@${commentUser} ${text}`}
              readOnly={false}
              onChange={handleText}
            />
            <div className="invisible">{`@${commentUser} ${text}`}</div>
          </div>
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
  );
}
