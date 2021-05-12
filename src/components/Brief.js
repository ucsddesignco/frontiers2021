import React from "react";
import { Grid } from "@material-ui/core";
import GradientLoop from "../assets/images/gr-compressed.mp4";
import Love from "../assets/images/heart.svg";
import DesignCo from "../assets/images/dco-logo.svg";

function Brief() {
  return (
    <div>
      <Grid container className="brief-container">
        <Grid item sm={4}>
          <h2 className="brief-title">Brief</h2>
        </Grid>
        <Grid item sm={8}>
          <div class="brief-right-column">
            <video autoPlay loop muted className="gradient-loop">
              <source src={GradientLoop} type="video/mp4" />
            </video>
            <p className="brief-paragraph">
              Why don’t you come to our Kick-off event to find out? ;)
            </p>
          </div>
        </Grid>
      </Grid>

      <div className="footer">
        <p className="signature">
          <span>
            Made with
            <img src={Love} alt="Love" />
          </span>
          <img src={DesignCo} alt="Design Co" />
        </p>

        <a id="email" href="mailto:hello@ucsddesign.co">
          hello@ucsddesign.co
        </a>
      </div>
    </div>
  );
}

export default Brief;
