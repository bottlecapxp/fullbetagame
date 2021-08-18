import React from "react";
import { useHistory } from "react-router-dom";
import "./components.css";

const Levels = (props) => {
  let history = useHistory();

  return (
    <div className="levels_container">
      <button id="next"
        onClick={() => {
          history.push("/ready");
        }}
      >
        NEXT
      </button>
      <p>
        AS YOU COMPLETE LEVELS YOU CAN CHOOSE TO SPIN FOR A PRIZE OR CONTINUE ON
        COLLECTING FOR A CHANCE AT BIGGER, BETTER PRIZES.
      </p>
      <button id="prizes" onClick={() => {history.push("/prizing")}}>- VIEW PRIZES -</button>
      <button id="terms" onClick={() => {history.push("/terms")}}>- CONTEST TERMS | CONDITIONS -</button>
    </div>
  );
};

export default Levels;
