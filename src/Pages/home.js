import React from "react";
import "./Pages.css";
import Win from "../components/win.js";
import Age from "../components/age.js";
import Footer from "../components/footer.js";

/**
 * @author Decory Herbert
 * @function Home
 **/

const Home = (props) => {
  return (
      <div className="home_container">
        <Win />
        <Age />
        <Footer />
      </div>
  );
};

export default Home;
