import React from "react";
import { Grid } from '@material-ui/core';
import "./Landing.css";
import Navbar from "./Navbar.js";
import topleft from "../assets/images/top-left.svg";
import topright from "../assets/images/top-right.svg";
import bottomleft from "../assets/images/bottom-left.svg";
import bottomcenter from "../assets/images/bottom-center.svg";
import bottomright from "../assets/images/bottom-right.svg";


function Landing() {
  return (
    <div>
      <div className="Landing">
        <div className="logo"/>
        <Navbar></Navbar>
        <div className="nav-menu" href="Menu.js"></div>
      </div>

      
      <Grid container alignItems="center" direction="row" spacing={1}>
          <Grid container item xs={8} sm={9} md={9}>
           <div className="banner-topleft">
             <p className="long-text">Design Frontiers 2021</p>
             <p className="short-text">Design Frontiers</p>
           </div> 
            
            
          </Grid>
          <Grid container item xs={4} sm={3} md={3} justify="flex-start">
            <div className="banner-topright"></div>
          </Grid>
        </Grid>

        

        <Grid container alignItems="center" className="bottom-container">
          <Grid container item xs={2} sm={2} md={2}>
            <div className="banner-bottomleft" />
          </Grid>
          <Grid container item xs={1} sm={4} md={4}>
            <div className="banner-bottomcenter" />
          </Grid>
          <Grid container item xs={9} sm={6} md={6}>
            <div className="banner-bottomright" />
          </Grid>  
        </Grid>
        
      

      <div className="row">
        <div className="landing-text">Design Frontiers is Design Co’s annual design sprint where teams of creative, collaborative individuals tackle real problems in the world and design for innovation.</div>
      </div>

      <div className="hole">
        <div className="button"></div>
      </div>
      
    
    </div>
  )
}

export default Landing;
