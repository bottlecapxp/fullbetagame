import React from "react";
import { useHistory } from "react-router-dom";
import "./components.css";

const ReadyButtons = (props) => {
  let history = useHistory();

  const load_game = () => {
    window.location.replace('https://bottlecapxp.github.io/sapporogame/')
  }
  return (
    <div className="ready-buttons_container">
      <button id="practice" onClick={load_game}>PRACTICE ROUND</button>
      <button id="play" onClick={load_game}>PLAY THE GAME</button>
    </div>
  );
};

export default ReadyButtons;