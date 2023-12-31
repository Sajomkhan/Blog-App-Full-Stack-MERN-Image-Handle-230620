import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5001/register', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username, password})
    })


    if (res.status === 200){
      alert('Registration Successfull')
    }else {
      alert('Registration Failure');
    }
  }
  
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
