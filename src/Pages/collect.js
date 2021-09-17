import React from "react";
import "./Pages.css";
import PixelRecords from '../images/run.gif'
import Levels from '../components/levels'
import Logo from "../images/Inst_Title.svg"
import InstTxt from "../images/Inst_text.svg"
import { useHistory } from "react-router-dom";

const Collect = (props) => {
  let history = useHistory()
  return (
      <div className="collect_container">
            <div className="inst-header_container">
                <img src={Logo} alt="Sapporo Logo" />
            </div>
        <img src={PixelRecords}  width="100%" alt="pixelated records" />
        <img src={InstTxt}  width="100%" alt="pixelated records" />
      
        <button className='p_now_1' onClick={() => {history.push('/collect-next')}}></button>
        <Levels />
      </div>
  );
};

export default Collect;