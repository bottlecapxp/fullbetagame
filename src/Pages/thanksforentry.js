import React from "react";
import "./Pages.css";
import SapporoLogo from '../images/sapporo-logo-thanks.png'

const ThanksForEntry = (props) => {
  return (
      <div className="tfp_container">
          <img src={SapporoLogo} width="250" alt="Sapporo Logo" />
          <h1>THANKS FOR YOUR ENTRY</h1>
      </div>
  );
};

export default ThanksForEntry;