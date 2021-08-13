import React from "react";
import "./Pages.css";
import PixelRecords from '../images/pixel-records.png'
import Levels from '../components/levels'

const Collect = (props) => {
  return (
      <div className="collect_container">
        <h2>COLLECT MORE RECORDS FOR YOUR CHANCE TO WIN GREAT PRIZES!</h2>
        <img src={PixelRecords}  width="75" alt="pixelated records" />
        <Levels />
      </div>
  );
};

export default Collect;