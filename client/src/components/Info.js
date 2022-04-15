import React, { useEffect } from "react";

export default function Info({ profileUser, user, createdAt }) {
  if (profileUser === "user") {
    return (
      <div className="info">
        <div className="info-image">
          <img src={user.image.png || user.image} alt="avatar" width="40px" />
        </div>
        <div className="info-name">{user.username}</div>
        <div className="info-duration">{createdAt}</div>
      </div>
    );
  } else if (profileUser === "you") {
    return (
      <div className="info">
        <div className="info-image">
          <img src={user.image.png || user.image} alt="avatar" width="40px" />
        </div>
        <div className="info-name">{user.username}</div>
        <div className="you">you</div>
        <div className="info-duration">{createdAt}</div>
      </div>
    );
  } else if (profileUser === "you_pic") {
    return (
      <div className="info">
        <div className="info-image">
          <img src={user.image.png || user.image} alt="avatar" width="40px" />
        </div>
      </div>
    );
  }
}
