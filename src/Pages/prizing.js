import React from "react";
import { useHistory } from "react-router-dom";
// import PrizingImg from "../images/prizes.png";
import CRules from "../images/cRules.png";
import Terms from "../images/terms.png";
import "./Pages.css";
// import Header from '../components/header.js'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Prizing = (props) => {
  let history = useHistory();

  return (
    <div className="prizing_container">
          {/* <img src={PrizingImg} style={{height: '100vh'}} alt="prizing"></img> */}
          <div className="nextBtnWrapper">
            <div className="nextBtn">
              <button className='nxtBtn'
                onClick={() => {
                  history.push("/collect");
                }}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
  );
};

export default Prizing;

//   <div className="prizing_container">
//   <Header title="PRIZING"/>
//   <img src={Tier3Prizes} height="175" style={{alignSelf: "flex-end"}} alt="Tier 3 Prizes" />
//   <img src={Tier2Prizes} height="175" style={{alignSelf: "flex-start"}} alt="Tier 2 Prizes" />
//   <img src={Tier1Prizes} height="175" style={{alignSelf: "flex-end"}} alt="Tier 2 Prizes" />
//   <button onClick={() => {history.push('/rules')}}>NEXT <i class="fas fa-caret-right"></i></button>
// </div>

// import Tier3Prizes from '../images/tier-3-prizes.png'
// import Tier2Prizes from '../images/tier-2-prizes.png'
// import Tier1Prizes from '../images/tier-1-prizes.png'

// import React from "react";
// import { useHistory } from "react-router-dom"
// import "./Pages.css";
// import Header from '../components/header.js'
// import Tier3Prizes from '../images/tier-3-prizes.png'
// import Tier2Prizes from '../images/tier-2-prizes.png'
// import Tier1Prizes from '../images/tier-1-prizes.png'

// const Prizing = (props) => {
//     let history = useHistory();

//     return (
//         <div className="prizing_container">
//           <Header title="PRIZING"/>
//           <img src={Tier3Prizes} height="175" style={{alignSelf: "flex-end"}} alt="Tier 3 Prizes" />
//           <img src={Tier2Prizes} height="175" style={{alignSelf: "flex-start"}} alt="Tier 2 Prizes" />
//           <img src={Tier1Prizes} height="175" style={{alignSelf: "flex-end"}} alt="Tier 2 Prizes" />
//           <button onClick={() => {history.push('/rules')}}>NEXT <i class="fas fa-caret-right"></i></button>
//         </div>
//     );
//   };

//   export default Prizing;
