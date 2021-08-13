import React from "react";
import { useHistory } from "react-router-dom";
import "./components.css";

const ReadyButtons = (props) => {
  let history = useHistory();

  return (
    <div className="ready-buttons_container">
      <button id="practice" onClick={() => {history.push("/game")}}>PRACTICE ROUND</button>
      <button id="play" onClick={() => {history.push("/game")}}>PLAY THE GAME</button>
    </div>
  );
};

export default ReadyButtons;