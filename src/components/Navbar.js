import React from "react";
import { Grid } from '@material-ui/core';
import "./stylesheet.css";

function Navbar() {
  return (
    <div className="navcontainer">
      <ul id="nav">
        <li>
          <a href="#" className="navtext">Home</a>
        </li>
        <li>
          <a href="#" className="navtext">About</a>
        </li>
        <li>
          <a href="#" className="navtext">FAQ</a>
        </li>
        <li>
          <a href="#" className="navtext">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
