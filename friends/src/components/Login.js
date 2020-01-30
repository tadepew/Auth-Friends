import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    return setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = e => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
        console.log(res.data.payload);
      })
      .catch(err => console.log("error", err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
