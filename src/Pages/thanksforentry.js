import React, { useEffect } from "react";
import "./Pages.css";
import SapporoLogo from '../images/sapporo-logo-thanks.png'
import { useHistory } from "react-router";

const ThanksForEntry = (props) => {
  const history = useHistory()
  useEffect(()=>{
    setTimeout(()=>{
      history.push('/ThanksForPlaying')
    },1700)
  },[])
  return (
      <div className="tfp_container">
          <img src={SapporoLogo} width="250" alt="Sapporo Logo" />
          <h1>THANKS FOR YOUR ENTRY</h1>
      </div>
  );
};

export default ThanksForEntry;