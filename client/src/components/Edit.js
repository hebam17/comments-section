import React from "react";

export default function Edit() {
  return (
    <div className="edit">
      <div className="edit-image trans">
        <img
          src="/images/icon-edit.svg"
          alt="edit arrow"
          // style={{ visibility: "hidden" }}
        />
      </div>
      <div className="edit-text  trans">Edit</div>
    </div>
  );
}
