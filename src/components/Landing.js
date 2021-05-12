import React from "react";
import Navbar from "./Navbar";
// import Banner from "../assets/images/frontiers-banner.svg";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="banner-container">
        <div className="event-banner" alt="event-banner"></div>
        <h2 className="landing-title">
          Design Frontiers is Design Co’s annual design sprint where teams of
          creative, collaborative individuals tackle real problems in the world
          and design for innovation.
        </h2>
      </div>
    </div>
  );
}

export default Landing;
