import React from "react";

export default function Edit({ handleEditComment }) {
  return (
    <div className="edit" onClick={handleEditComment}>
      <div className="edit-image trans">
        <img src="/images/icon-edit.svg" alt="edit arrow" />
      </div>
      <div className="edit-text  trans">Edit</div>
    </div>
  );
}
