import React from "react";
import { useHistory } from "react-router-dom";
import "./Pages.css";
import Logo from "../images/sapporo-logo.png"
import Tshirt from "../images/tshirt-icon.svg"
import Earbuds from "../images/earbuds-icon.svg"
import Headphones from "../images/headphones-icon.svg"
import Stereo from "../images/stereo-icon.svg"
import Chance from "../images/chance-to-win.svg"
import Hat from "../images/hat-icon.svg"
import Tier3 from "../images/tier-3-title-mobile.svg"
import Tier2 from "../images/tier-2-title-mobile.svg"
import Tier1 from "../images/tier-1-title-mobile.svg"

const Prizing1 = (props) => {
    let history = useHistory()
  
    return (
        <div className="prizing1_container">
            <div className="prizing-header_container">
                <img src={Logo} alt="Sapporo Logo" />
                <h1>PRIZING</h1>
            </div>
            <div className="tier-3_container">
                <img src={Tshirt} alt="T-shirt icon" />
                <img src={Earbuds} alt="Earbuds icon" />
                <img src={Headphones} alt="Headphones icon" />
                <img src={Stereo} alt="Stereo icon" />
                <img src={Chance} id="chance" alt="Chance To Win" />
            </div>
            <div className="tier-3-title_container">
                <img src={Tier3} alt="Tier 3 title" />
            </div>
            <div className="tier-2_container">
                <img src={Tshirt} alt="T-shirt icon" />
                <img src={Earbuds} alt="Earbuds icon" />
                <img src={Hat} alt="Hat icon" />
                <img src={Chance} id="chance" alt="Chance To Win" />
            </div>
            <div className="tier-2-title_container">
                <img src={Tier2} alt="Tier 2 title" />
            </div>
            <div className="tier-1_container">
            <img src={Tshirt} alt="T-shirt icon" />
                <img src={Earbuds} alt="Earbuds icon" />
                <img src={Chance} id="chance" alt="Chance To Win" />
            </div>
            <div className="tier-1-title_container">
                <img src={Tier1} alt="Tier 1 title" />
            </div>
            <button id="next-btn" onClick={() => {history.push('/prizing-2')}}>NEXT</button>
        </div>
    );
  };
  
  export default Prizing1;