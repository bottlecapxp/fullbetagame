import React from "react";
import { useHistory } from "react-router-dom";
import "./components.css";

const Levels = (props) => {
  let history = useHistory();

  return (
    <div className="levels_container">
      <button  id="prizes" onClick={() => {history.push("/prizing-1")}}>- VIEW PRIZES -</button>
      <button  id="terms" onClick={() => {history.push("/terms")}}>- CONTEST TERMS | CONDITIONS -</button>
    </div>
  );
};

export default Levels;
