import React from "react";
import "./Pages.css";
import PixelPlayer from '../images/pixel-player.png'
import ReadyButtons from "../components/readybuttons";

const Ready = (props) => {
  return (
      <div className="ready_container">
        <h1>ARE YOU READY TO PLAY?</h1>
        <img src={PixelPlayer}  width="200" alt="pixelated records" />
        <ReadyButtons />
      </div>
  );
};

export default Ready;