import React, { useState } from "react";
import Send from "./Send";
import Info from "./Info";
import Reply from "./Reply";

export default function NewComment({ currentUser, reply = false }) {
  const [text, setText] = useState("");
  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };
  // console.log("currentUser:", currentUser);
  return (
    <div className="comment-new">
      <div className="new-info">
        <Info profileUser="you_pic" user={currentUser} you_pic={true} />
      </div>

      <div className="text text-new">
        <textarea
          name="comment"
          value={text}
          readOnly={false}
          onChange={handleText}
          placeholder="Add a comment..."
        />
        <div className="invisible invisible-new">{text}</div>
      </div>

      {!reply ? (
        <div className="comment-new-send">
          <Send />
        </div>
      ) : (
        <div className="comment-new-reply">
          <Reply active />
        </div>
      )}
    </div>
  );
}
