import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Scores({ score, currentUser, commentId }) {
  const [newScore, setNewScore] = useState(score);
  const location = useLocation();

  const handlePlus = () => {
    setNewScore(newScore + 1);
    const setScore = async () => {
      if (location.pathname !== "/") {
        console.log(currentUser.username);
        const res = await axios.put(
          `/comments/${currentUser._id}/${commentId}/upvote`
        );
        console.log(res);
      }
    };
    setScore();
  };

  const handleMinus = () => {
    setNewScore(newScore - 1);
    const setScore = async () => {
      if (location.pathname !== "/") {
        console.log(currentUser.username);
        const res = await axios.put(
          `/comments/${currentUser._id}/${commentId}/downvote`
        );
        console.log(res);
      }
    };
    setScore();
  };
  return (
    <div className="scores">
      <div className="plus trans" onClick={handlePlus}>
        <img
          src="/images/icon-plus.svg"
          alt="plus scores"
          style={{ visibility: "hidden" }}
        />
      </div>
      <div className="score-value">{newScore}</div>
      <div className="minus trans" onClick={handleMinus}>
        <img
          src="/images/icon-minus.svg"
          alt="minus scores"
          style={{ visibility: "hidden" }}
        />
      </div>
    </div>
  );
}
