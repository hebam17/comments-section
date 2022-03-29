import React from "react";

export default function Reply({ active }) {
  if (!active) {
    return (
      <div className="reply trans">
        <div className="reply-image">
          <img
            src="/images/icon-reply.svg"
            alt="reply arrow"
            style={{ visibility: "hidden" }}
          />
        </div>
        <div className="reply-text">Reply</div>
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
