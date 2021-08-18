import React from "react";
import "./Pages.css";
import Form from '../components/form'
import ARExperience from '../images/sapporo-ar-experience.png'
import FooterScreenshot from '../images/footer-screenshot.png'
import { useHistory } from "react-router-dom";

const Prize = (props) => {
  let history = useHistory();
  return (
      <div className="prize_container">
            <img src={ARExperience} width="150" alt="" />
            <h3>LET US KNOW WHERE WE CAN SEND YOUR PRIZE</h3>
            <Form />
            <button id="submit" onClick={() => {history.push("/thanksforplaying")}}>SUBMIT</button>
      {/* <button id="terms-conditions">Terms & Conditions</button> */}
            <div id="footerScreenshot_container">
              <img src={FooterScreenshot} width="100%" alt="" />
            </div>
      </div>
  );
};

export default Prize;