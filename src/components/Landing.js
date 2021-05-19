import React from "react";
import Navbar from "./Navbar";
import Toggle from "./Toggle";
// import { Grid } from "@material-ui/core";
import TopBanner2 from "../assets/images/top-banner.png";
import BottomBanner from "../assets/images/bottom-banner.png";

function Landing() {
  return (
    <div id="landing">
      <Navbar />
      <div className="landing-section">
        <div className="top-container">
          <img className="top-banner" src={TopBanner2} alt="hello" />
          <img className="bottom-banner" src={BottomBanner} alt="hello" />
          <p className="top-text">
            Design Frontiers &nbsp;
            <span id="year">2021</span>
          </p>
        </div>
        <h2 className="landing-title">
          Design Frontiers is Design Co’s annual design sprint where teams of
          creative, collaborative individuals tackle real problems in the world
          and design for innovation.
        </h2>
      </div>
      <Toggle id="landingToggle" />
    </div>
  );
}

export default Landing;
