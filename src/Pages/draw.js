import React from "react";
import "./Pages.css";
import Form from '../components/form'
import ARExperience from '../images/sapporo-ar-experience.png'
import FooterScreenshot from '../images/footer-screenshot.png'
import { useHistory } from "react-router-dom";

const Draw = (props) => {
  let history = useHistory();
  return (
      <div className="draw_container">
            <img src={ARExperience} width="150" alt="" />
            <h3>TO ENTER THE DRAW, PLEASE TELL US ABOUT YOURSELF</h3>
            <Form />
            <button id="submit" onClick={() => {history.push("/thanksforentry")}}>SUBMIT</button>
      {/* <button id="terms-conditions">Terms & Conditions</button> */}
            <div id="footerScreenshot_container"></div>
            <div id="footerScreenshot_container">
              <img src={FooterScreenshot} width="100%" alt="" />
            </div>
      </div>
  );
};

export default Draw;