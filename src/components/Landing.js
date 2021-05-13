import React from "react";
import Navbar from "./Navbar";
import Toggle from "./Toggle";
// import { Grid } from "@material-ui/core";
import TopBanner2 from "../assets/images/top-banner.png";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="landing-section">
        <div className="top-container">
          <img className="top-banner" src={TopBanner2} alt="hello" />
          <p className="top-text">Design Frontiers 2021</p>
        </div>
        <h2 className="landing-title">
          Design Frontiers is Design Co’s annual design sprint where teams of
          creative, collaborative individuals tackle real problems in the world
          and design for innovation.
        </h2>
      </div>
      <Toggle />
    </div>
  );
}

export default Landing;
