import React from "react";
import { Grid } from '@material-ui/core';
import "./stylesheet.css";

function Navbar() {
  return (
    <div className="navcontainer">
      <ul id="nav">
        <li>
          <a href="#" className="navtext">Overview</a>
        </li>
        <li>
          <a href="#" className="navtext">Timeline</a>
        </li>
        <li>
          <a href="#" className="navtext">Brief</a>
        </li>
        <li>
          <a href="#" className="navtext">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
