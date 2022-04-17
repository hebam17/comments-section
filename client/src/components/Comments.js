import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Comment from "./Comment";
import flashData from "../data.json";
import NewComment from "./NewComment";
import axios from "axios";

export default function Comments({ username }) {
  const params = useParams();
  const location = useLocation();
  const [comments, setComments] = useState(flashData.comments);
  const [user, setUser] = useState(flashData.currentUser);

  // const Username = username || params.username;
  useEffect(() => {
    const getComments = async () => {
      if (location.pathname !== "/") {
        try {
          const res = await axios.get(`/comments/all`);
          setComments(res.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    getComments();
  }, [location.pathname]);

  useEffect(() => {
    const getUser = async () => {
      if (location.pathname !== "/") {
        try {
          const res = await axios.get(`/users/${params.username}`);
          // console.log("user:", res.data);
          setUser(res.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    getUser();
  }, [location.pathname, params.username]);

  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment
          currentUser={user}
          comment={comment}
          key={comment.id || comment._id}
        />
      ))}
      <NewComment currentUser={user} />
    </div>
  );
}
