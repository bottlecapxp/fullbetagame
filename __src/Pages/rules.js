import React from "react";
import { useHistory } from "react-router-dom";
import "./Pages.css";
import Header from "../components/header.js";
import BulletPoint from "../components/bulletpoint.js";

const Rules = (props) => {
  let history = useHistory();

  return (
    <div className="rules_container">
      <Header title="CONTEST RULES" />
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet "/>
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet "/>
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet "/>
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet "/>
      <BulletPoint point="•Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet "/>
      <button
        onClick={() => {
          history.push("/terms");
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Rules;
