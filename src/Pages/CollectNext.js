import React from "react";
import "./Pages.css";
import PixelRecords from '../images/Wheel.png'
import Levels from '../components/levels'
import Logo from "../images/Inst_Title.svg"
import InstTxt from "../images/Inst_text2.svg"
import { useHistory } from "react-router-dom";

const CollectNext = (props) => {
  let history = useHistory()
  const load_game = () => {
    window.location.replace('https://sapporo.worldcast.io/cast/agkV54XR2BO3dpq8Zy371ALoKWy6mwPG0Zlz/')
  }
  return (
      <div className="collect_container">
            <div className="inst-header_container">
                <img src={Logo} alt="Sapporo Logo" />
            </div>
        <img src={PixelRecords}  width="15%" alt="pixelated records" />
        <img src={InstTxt}  width="80%" alt="pixelated records" />
      
        <button className='p_now_2' onClick={load_game}></button>
        <Levels />
      </div>
  );
};

export default CollectNext;