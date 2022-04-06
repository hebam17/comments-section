import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Comment from "./Comment";
import flashData from "../data.json";

export default function Comments({ username }) {
  const params = useParams();
  const location = useLocation();
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState();

  const Username = username || params.username;
  // console.log("user:", Username);
  // console.log(flashData);
  // console.log("location:", location);

  useEffect(() => {
    if (location.pathname === "/") {
      // console.log("homepage");
      setComments(flashData.comments);
      setUser(flashData.currentUser);
    } else {
      // console.log(`${Username} page`);
    }
  });
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment user={user} comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
