import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

function Map() {
  const [state, setState] = useState({
    id: null,
    name: "",
    title: "",
    description: "",
    players: [],
    items: [],
    error_msg: "",
    error: ""
  });

  return (
    <div>
      init
      <h1>this is the game</h1>
      <h2>Room: {state.title}</h2>
      <h2>Description: {state.description} </h2>
      <h2>Players: {state.players}</h2>
      <h2>Items: {state.items}</h2>
      <h2>Your Name: {state.name}</h2>
    </div>
  );
}

export default Map;
