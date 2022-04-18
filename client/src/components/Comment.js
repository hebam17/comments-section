import { useState, useEffect } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Info from "./Info";
import Replies from "./Replies";
import Reply from "./Reply";
import Scores from "./Scores";
import Send from "./Send";
import Update from "./Update";

export default function Comment({ comment, currentUser }) {
  const [text, setText] = useState(comment.content);
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
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
              <div className="info">
                <Info
                  profileUser="you"
                  user={comment.user}
                  createdAt={comment.createdAt}
                />
              </div>
            ) : (
              <div className="info">
                <Info
                  profileUser="user"
                  user={comment.user}
                  createdAt={comment.createdAt}
                />
              </div>
            )}

            {currentUser.username === comment.user.username ? (
              <div className="comment-delete">
                <Delete />
                <Edit />
              </div>
            ) : (
              <div className="comment-reply">
                <Reply />
              </div>
            )}
          </div>
          <div className="text">
            <textarea
              name="comment"
              value={text}
              readOnly={false}
              onChange={handleText}
            />
            <div className="invisible">{text}</div>
          </div>
        </div>
      </div>
      <div className="comment-replies">
        {comment.replies.map((reply) => (
          <Replies
            currentUser={currentUser}
            commentUser={comment.user.username}
            reply={reply}
            key={reply.id || reply._id}
          />
        ))}
      </div>
    </>
  );
}
