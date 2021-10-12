import React, { useEffect } from "react";
import "./Pages.css";
import { useHistory } from "react-router-dom"
import Logo from "../images/sapporo-logo.png"

/**
 * @author Decory Herbert
 * @function Home
 **/

const Home = (props) => {
  let history = useHistory()

  useEffect(()=>{
if(localStorage.getItem('revisit') == 'true'){
  fetch("https://bottlecapdev.pythonanywhere.com/visits", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
    'visited': 'true',
    })
  }).then((resp) => resp.json())
  .then((respr)=>{
    console.log(JSON.stringify(respr))
  })
}
if(localStorage.getItem('revisit') == null || localStorage.getItem('revisit') == undefined){
  localStorage.setItem('revisit', 'true')
  fetch("https://bottlecapdev.pythonanywhere.com/visits", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
    'visited': 'false',
    })
  }).then((resp) => resp.json())
  .then((respr)=>{
    console.log(JSON.stringify(respr))
  })
}
  },[])

  const load_game = () => {
    window.location.replace('https://bottlecapxp.github.io/sapporogame/')
  }
  const milkcom = () => {
    window.location.replace('https://milk.com/')
  }
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
          <button onClick={load_game}>YES, LET ME IN</button>
          <button onClick={milkcom}>NO, TAKE ME HOME</button>
        </div>
      </div>
  );
};

export default Home;
