import React, { useState } from "react";
import axios from "axios";
import { HOST_URL } from "./util";

function Register(props) {
  const [isLogin, setLogin] = useState(false);
  const [registerAcc, setRegisterAcc] = useState({ username: "", password1: "", password2: "" });
  const [msg, setMsg] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    axios
      .post(`${HOST_URL}/api/registration/`, registerAcc)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("key", res.data.key);
        window.location.reload();
      })
      .catch(error => {
        setMsg("This password is too short", error);
      });
  };

  const registerChange = e => {
    setRegisterAcc({
      ...registerAcc,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="wrapper">
      <div className="loginForm">
        <form className="form" onSubmit={handleRegister}>
          <h1>Welcome to the Island</h1>
          <input
            className="formInput"
            type="text"
            name="username"
            placeholder="username"
            value={registerAcc.username}
            onChange={registerChange}
          />

          <input
            className="formInput"
            type="password"
            name="password1"
            placeholder="password"
            value={registerAcc.password1}
            onChange={registerChange}
          />

          <input
            className="formInput"
            type="password"
            name="password2"
            placeholder="enter password again"
            value={registerAcc.password2}
            onChange={registerChange}
          />
          {msg ? <p>{msg}</p> : null}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
