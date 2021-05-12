import React from "react";
import Navbar from "./Navbar";
import Banner from "../assets/images/frontiers-banner.svg";

function Landing() {
  return (
    <div>
      <Navbar />
      <div>
        <img className="event-banner" src={Banner} alt="event-banner" />
      </div>
    </div>
  );
}

export default Landing;
