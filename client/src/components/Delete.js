import React from "react";

export default function Delete({ handleDeleteModal }) {
  return (
    <div className="delete" onClick={handleDeleteModal}>
      <div className="delete-image trans">
        <img src="/images/icon-delete.svg" alt="delete arrow" />
      </div>
      <div className="delete-text  trans">Delete</div>
    </div>
  );
}
