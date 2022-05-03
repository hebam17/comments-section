import React from "react";

export const DeleteModal = React.forwardRef(
  (
    {
      handleCancelDelete,
      handleConfirmDeleteComment,
      handleConfirmDeleteReply,
    },
    deleteRef
  ) => {
    return (
      <div ref={deleteRef} className="container-modal">
        <div className="outer-modal">
          <div className="inner-modal">
            <div className="title-modal">
              <h1>Delete comment</h1>
            </div>
            <div className="body-modal">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </div>
            <div className="btns-modal">
              <button className="cancel-btn" onClick={handleCancelDelete}>
                NO,CANCEL
              </button>
              <button
                className="delete-btn"
                onClick={handleConfirmDeleteComment || handleConfirmDeleteReply}
              >
                YES,DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
