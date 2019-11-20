import React, { useState, useEffect } from "react";

import Login from "./components/Login";
import Register from "./components/Register";

import AboutTeam from "./components/AboutTeam";
import AboutGame from "./components/AboutGame";
import Map from "./components/game/Map";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginButton, setIsLoginButton] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("key")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function toggleForm() {
    console.log("hello?", isLoginButton);
    setIsLoginButton(!isLoginButton);
  }
  return (
    <div className="App">
      <AboutGame />
      {isLoggedIn ? (
        <div className="mapBox">
          <Map />
        </div>
      ) : (
        <div className="logBox">
          {isLoginButton ? <Register /> : <Login />}
          <button className="toggleLogBtn" onClick={e => toggleForm(e)}>
            {isLoginButton ? "Switch to Login" : "Switch to Register"}
          </button>
        </div>
      )}

      <AboutTeam />
    </div>
  );
}

export default App;
