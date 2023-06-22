import { useEffect, useState } from "react";
import Post from "../components/Post";

const HomePage = ({_id,title,summary,cover,content,createdAt,author}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/post")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return <>
    {posts.length > 0 && posts.map((post) => 
      <Post {...post }/>
    )}
  </>;
};

export default HomePage;
