import React, { useState } from "react";
import Toggle from "./Toggle";
import DesignCo from "../assets/images/dco-logo.svg";
import Menu from "../assets/images/nav-menu.svg";
import Exit from "../assets/images/exit.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div class="navbar">
      <img id="logo" src={DesignCo} alt="Design Co Logo" />
      <nav className="desktop">
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

      <nav className="mobile">
        <img 
          id="menu"
          src={menuOpen ? Exit : Menu} 
          onClick={() => { setMenuOpen(!menuOpen) }} 
          alt="Menu" 
          width="60px"
          height="60px"
        />
        {
          menuOpen &&
          <div className="nav-container">
            <Toggle text="Overview" onChange={() => { setMenuOpen(false) }} />
            <Toggle text="Timeline" onChange={() => { setMenuOpen(false) }} />
            <Toggle text="Brief" onChange={() => { setMenuOpen(false) }} />
          </div>
        }
      </nav>
    </div>
  );
}

export default Navbar;
