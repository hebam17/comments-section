import React from "react";

export default function Send({ handleComment }) {
  return (
    <div className="send trans" onClick={handleComment}>
      <div className="send-text">SEND</div>
    </div>
  );
}
