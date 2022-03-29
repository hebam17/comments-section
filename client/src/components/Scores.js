import React from "react";

export default function Scores() {
  return (
    <div className="scores">
      <div className="plus trans">
        <img
          src="/images/icon-plus.svg"
          alt="plus scores"
          style={{ visibility: "hidden" }}
        />
      </div>
      <div className="score-value">12</div>
      <div className="minus trans">
        <img
          src="/images/icon-minus.svg"
          alt="minus scores"
          style={{ visibility: "hidden" }}
        />
      </div>
    </div>
  );
}
