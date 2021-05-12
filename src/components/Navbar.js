import React from "react";
import DesignCo from "../assets/images/dco-logo.svg";

function Navbar() {
  return (
    <div>
      <div class="navbar">
        <img src={DesignCo} alt="Design Co Logo" />
        <nav>
          <ul>
            <li className="list-item">
              <a>Overview</a>
            </li>
            <li className="list-item">
              <a>Timeline</a>
            </li>
            <li className="list-item">
              <a>Brief</a>
            </li>
            <li className="list-last-item">
              <a>Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
