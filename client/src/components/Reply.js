import React from "react";

export default function Reply({ active }) {
  if (!active) {
    return (
      <div className="reply">
        <div className="reply-image trans">
          <img src="/images/icon-reply.svg" alt="reply arrow" />
        </div>
        <div className="reply-text  trans">Reply</div>
      </div>
    );
  } else {
    return (
      <div className="reply-active trans">
        <div className="reply-text-active">Reply</div>
      </div>
    );
  }
}
