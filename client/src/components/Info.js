import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default function Info({ profileUser, user, createdAt }) {
  if (profileUser === "user") {
    return (
      <div className="info">
        <div className="info-image">
          <img src={user.image.png || user.image} alt="avatar" width="40px" />
        </div>
        <div className="info-name">{user.username}</div>
        <div className="info-duration">
          {" "}
          {timeAgo.format(Date.parse(createdAt) || Date.now())}
        </div>
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
        <div className="info-duration">
          {timeAgo.format(Date.parse(createdAt) || Date.now())}
        </div>
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
