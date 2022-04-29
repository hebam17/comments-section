import React from "react";

export default function Update({ handleUpdateComment, handleUpdateReply }) {
  return (
    <div
      className="update trans"
      onClick={handleUpdateComment || handleUpdateReply}
    >
      <div className="update-text">UPDATE</div>
    </div>
  );
}
