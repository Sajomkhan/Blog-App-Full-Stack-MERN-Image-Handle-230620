import { useContext, useEffect,  } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const username = userInfo?.username;

  useEffect(() => {
    fetch("http://localhost:5001/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      });
  }, [setUserInfo]);


  function logout(){
    fetch('http://localhost:5001/logout', {
      method: 'POST',
      credentials: 'include'
    })
    setUserInfo(null)
  }


  return (
    <header>
      <a href="/" className="logo">
        MyBlog
      </a>
      <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout} className="logout" >Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Loging</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
