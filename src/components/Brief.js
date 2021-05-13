import React from "react";
import GradientLoop from "../assets/images/gr-compressed.mp4";
import Love from "../assets/images/heart.svg";
import DesignCo from "../assets/images/dco-logo.svg";

function Brief() {
  return (
    <div>
      <div className="brief-container">
        <div className="brief-container-left">
          <h2 className="brief-title">Brief</h2>
        </div>
        <div className="brief-container-right">
          <video autoPlay loop muted className="gradient-loop">
            <source src={GradientLoop} type="video/mp4" />
          </video>
          <p className="brief-paragraph">
            We've been brewing some cool design briefs for Design Frontiers, and
            we can't wait to reveal it at our kickoff event! Until then, we wish
            you the best of luck in finding a team!
          </p>
        </div>
      </div>

      <div className="footer">
        <p className="signature">
          <span className="footer-text">
            Made with
            <img src={Love} alt="Love" />
          </span>
          <img src={DesignCo} alt="Design Co" />
        </p>

        <a id="email" className="footer-text" href="mailto:hello@ucsddesign.co">
          hello@ucsddesign.co
        </a>
      </div>
    </div>
  );
}

export default Brief;
