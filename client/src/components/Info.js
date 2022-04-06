import React from "react";

export default function Info({ profileUser, user }) {
  if (profileUser === "user") {
    return (
      <div className="info">
        <div className="info-image">
          <img
            src={user.image.png || "/images/profile.png"}
            alt="avatar"
            width="40px"
          />
        </div>
        <div className="info-name">{user.username}</div>
        <div className="info-duration">1 month ago</div>
      </div>
    );
  } else if (profileUser === "you") {
    return (
      <div className="info">
        <div className="info-image">
          <img src="/images/avatars/image-amyrobson.webp" alt="avatar" />
        </div>
        <div className="info-name">amyrobson</div>
        <div className="you">you</div>
        <div className="info-duration">1 month ago</div>
      </div>
    );
  } else if (profileUser === "you-pic") {
    return (
      <div className="info">
        <div className="info-image">
          <img src="/images/avatars/image-amyrobson.webp" alt="avatar" />
        </div>
      </div>
    );
  }
}
