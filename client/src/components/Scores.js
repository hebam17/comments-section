import React from "react";

export default function Scores() {
  return (
    <div className="scores">
      <div className="plus">
        <img src="/images/icon-plus.svg" alt="plus scores" />
      </div>
      <div className="score-value">12</div>
      <div className="minus">
        <img src="/images/icon-minus.svg" alt="minus scores" />
      </div>
    </div>
  );
}
