import React, { useState } from "react";
import Send from "./Send";
import Info from "./Info";
import Reply from "./Reply";
import { handleComment } from "../utils";

export default function NewComment({
  currentUser,
  reply = false,
  handleReplyActive,
}) {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };

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
          placeholder={reply ? "Add a reply..." : "Add a comment..."}
        />
        <div className="invisible invisible-new">{text}</div>
      </div>

      {!reply ? (
        <div className="comment-new-send">
          <Send
            handleComment={() => handleComment(text, setText, currentUser)}
          />
        </div>
      ) : (
        <div className="comment-new-reply">
          <Reply handleReplyActive={() => handleReplyActive(text)} active />
        </div>
      )}
    </div>
  );
}
