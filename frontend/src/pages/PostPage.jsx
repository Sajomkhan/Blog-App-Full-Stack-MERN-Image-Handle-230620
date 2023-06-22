import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatISO9075, format } from "date-fns";
import { UserContext } from "../context/UserContext";

const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState();

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5001/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPostInfo(data));
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>

      {/* time & author */}
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      {/* <time> {format(new Date(postInfo.createdAt), "MMM d, yyy HH:mm")}</time> */}
      <div className="author">by @{postInfo.author.username}</div>

      {/* Edit button */}
      {userInfo.id === postInfo.author._id && (
        <div className="edit-div">
          <Link className="edit-button" to={`/edit/${postInfo._id}`}>
            <i class="fa-regular fa-pen-to-square"/> Edit This Post
          </Link>
        </div>
      )}

      {/* image */}
      <div className="post-image-div">
        <img src={`http://localhost:5001/${postInfo.cover}`} alt="" />
      </div>

      {/* content */}
      <p
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default PostPage;
