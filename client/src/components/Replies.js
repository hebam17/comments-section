import { useState } from "react";
import Scores from "./Scores";
import Info from "./Info";
import Reply from "./Reply";

export default function Replies({ comment }) {
  const [text, setText] = useState(comment.content);
  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };
  return (
    <div className="comment comment-reply">
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
  );
}
