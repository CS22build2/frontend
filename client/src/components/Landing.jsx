import React from "react";
import Login from "./Login";
import Register from "./Register";

function Landing() {
  return (
    <div>
      <h1>Welcome to the Island</h1>
      <Login />
      <Register />
    </div>
  );
}

export default Landing;
