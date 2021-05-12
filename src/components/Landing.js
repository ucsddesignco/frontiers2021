import React from "react";
import { Grid } from '@material-ui/core';
import "./Landing.css";
import Navbar from "./Navbar.js";
import DesignCo from "../assets/images/dco-logo.svg";
import Banner from "../assets/images/frontiers-banner.svg"

function Landing() {
  return (
    <div className="row">
      <div className="Landing">
        <div className="logo"/>
        <Navbar></Navbar>
      </div>

      <div className="landing-container">
        <div className="banner"/>
      </div> 
      <div className="row">
        <div className="landing-text">Design Frontiers is Design Co’s annual design sprint where teams of creative, collaborative individuals tackle real problems in the world and design for innovation.</div>
      </div>
    
    </div>
  )
}

export default Landing;
