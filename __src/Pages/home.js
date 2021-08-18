import React from "react";
import "./Pages.css";
import { useHistory } from "react-router-dom"
import Logo from "../images/sapporo-logo.png"

/**
 * @author Decory Herbert
 * @function Home
 **/

const Home = (props) => {
  let history = useHistory()

  return (
      <div className="home_container">
        <img src={Logo} alt="Sapporo Logo" />
        <div className="win_container">
          <h1><span className="win">WIN</span> A HOME <br /> STUDIO</h1>
        </div>
        <div className="of-age_container">
          <p>ARE YOU OVER <br /> 19 YEARS OF AGE?</p>
        </div>
        <div className="button_container">
          <button onClick={() => {history.push('/prizing-1')}}>YES, LET ME IN</button>
          <button onClick={() => {history.push('https://milk.com/')}}>NO, TAKE ME HOME</button>
        </div>
      </div>
  );
};

export default Home;
