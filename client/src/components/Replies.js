import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scores from "./Scores";
import Info from "./Info";
import Reply from "./Reply";
import Delete from "./Delete";
import Edit from "./Edit";
import axios from "axios";

export default function Replies({ comment, currentUser, commentUser }) {
  const [text, setText] = useState(comment.content);
  const location = useLocation();

  useEffect(() => {
    const getUser = async () => {
      if (location.pathname !== "/") {
        const user = await axios.get(`/users/user/${comment.user}`);
        console.log("user:", user);
        comment.user = user.data;
        console.log("comment.user:", typeof comment.user);
        console.log("comment:", comment);
      }
    };
    getUser();
  }, [currentUser, comment, location.pathname]);
  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };

  return (
    // <div>Hello</div>
    <div className="comment ">
      <div className="comment-scores">
        <Scores
          score={comment.score}
          currentUser={currentUser}
          commentId={comment._id}
        />
      </div>
      <div className="comment-info">
        <div className="comment-controllers">
          {currentUser.username === comment.user.username ? (
            <div className="info">
              <Info
                profileUser="you"
                user={comment.user}
                createdAt={comment.createdAt}
              />
            </div>
          ) : (
            <div className="info">
              <Info
                profileUser="user"
                user={comment.user}
                createdAt={comment.createdAt}
              />
            </div>
          )}
          {currentUser.username === comment.user.username ? (
            <div className="comment-delete">
              <Delete />
              <Edit />
            </div>
          ) : (
            <div className="comment-reply">
              <Reply />
            </div>
          )}
        </div>
        <div className="text text-reply">
          <textarea
            name="comment"
            value={`@${commentUser} ${text}`}
            readOnly={false}
            onChange={handleText}
          />
          <div className="invisible">{`@${commentUser} ${text}`}</div>
        </div>
      </div>
    </div>
  );
}
