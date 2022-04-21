import React from "react";

export default function Reply({ active, handleReply, handleReplyActive }) {
  if (!active) {
    return (
      <div className="reply" onClick={handleReply}>
        <div className="reply-image trans">
          <img src="/images/icon-reply.svg" alt="reply arrow" />
        </div>
        <div className="reply-text  trans">Reply</div>
      </div>
    );
  } else {
    return (
      <div className="reply-active trans" onClick={handleReplyActive}>
        <div className="reply-text-active">REPLY</div>
      </div>
    );
  }
}
