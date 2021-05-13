import React from "react";
import Navbar from "./Navbar";
import Toggle from "./Toggle";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="banner-container">
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
