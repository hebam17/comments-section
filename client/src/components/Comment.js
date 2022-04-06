import { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Info from "./Info";
import Replies from "./Replies";
import Reply from "./Reply";
import Scores from "./Scores";
import Send from "./Send";
import Update from "./Update";

export default function Comment({ comment }) {
  const [text, setText] = useState(comment.content);
  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };
  return (
    <>
      <div className="comment">
        <div className="comment-scores">
          <Scores />
        </div>
        <div className="comment-info">
          <div className="comment-controllers">
            <div className="info">
              <Info profileUser="user" user={comment.user} />
            </div>
            <div className="reply">
              <Reply />
            </div>
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
          <Replies comment={reply} key={reply.id} />
        ))}
      </div>
    </>
  );
}
