import React, { useRef } from "react";
import GradientLoop from "../assets/images/gr-compressed.mp4";
import Love from "../assets/images/heart.svg";
import DesignCo from "../assets/images/dco-logo.svg";
import ToggleBrief from "./ToggleBrief";

function Brief() {
  const briefRef = useRef();

  return (
    <div id="brief" ref={briefRef}>
      <div className="brief-container">
        <div className="brief-container-left">
          <h2 className="brief-title">Brief</h2>
        </div>
        <div className="brief-container-right">
          <video autoPlay loop muted playsInline className="gradient-loop">
            <source src={GradientLoop} type="video/mp4" />
          </video>
          <p className="brief-paragraph">
            Fill in these blanks in the following sentence: <br />
            Relating to social impact, how might we make _____________ resources
            more accessible to ____________?
          </p>
          <ToggleBrief></ToggleBrief>
        </div>
      </div>

      <div className="footer">
        <p className="signature">
          <span className="footer-text">
            Made with
            <img className="footer-logo" src={Love} alt="Love" />
          </span>
          <img className="footer-logo" src={DesignCo} alt="Design Co" />
        </p>

        <a id="email" className="footer-text" href="mailto:hello@ucsddesign.co">
          hello@ucsddesign.co
        </a>
      </div>
    </div>
  );
}

export default Brief;
