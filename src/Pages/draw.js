import React from "react";
import "./Pages.css";
import Form from '../components/form'
import Logo from "../images/sapporo-logo.png"
import FooterScreenshot from '../images/footer-screenshot.png'
import { useHistory } from "react-router-dom";



const Draw = (props) => {
  let history = useHistory();


  return (
      <div className="draw_container">
            <img style={{marginTop: '20px'}} src={Logo} width="150" alt="" />
            <h3 style={{marginBottom: '0px', width: '100%'}}>CONGRATULATIONS YOU WON!</h3>
            <h5 style={{marginTop: '-10px'}}> Enter your details below to redeem your prize.</h5>
            <Form />
            
      {/* <button id="terms-conditions">Terms & Conditions</button> */}
            <div id="footerScreenshot_container"></div>
            <div id="footerScreenshot_container">
              <img src={FooterScreenshot} width="100%" alt="" />
            </div>
      </div>
  );
};

export default Draw;