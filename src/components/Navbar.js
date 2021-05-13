import React, { useState } from "react";
import Toggle from "./Toggle";
import DesignCo from "../assets/images/dco-logo.svg";
import Menu from "../assets/images/nav-menu.svg";
import Exit from "../assets/images/exit.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    document.body.style.overflow = menuOpen ? "visible" : "hidden" ;
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  }

  return (
    <div class="navbar">
      <img id="logo" src={DesignCo} alt="Design Co Logo" />
      <nav className="desktop">
        <ul>
          <li className="list-item">
            <a href="#details">Overview</a>
          </li>
          <li className="list-item">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="list-item">
            <a href="#brief">Brief</a>
          </li>
          <li className="list-last-item">
            <a href="https://forms.gle/CSqLiC4tHKe7oskt6" target="_blank">Register</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile">
        <img 
          id="menu"
          src={menuOpen ? Exit : Menu} 
          onClick={() => { handleMenuClick() }} 
          alt="Menu" 
          width="55px"
          height="55px"
        />
        {
          menuOpen &&
          <div className="nav-container">
            <Toggle text="Overview" href="details" onChange={() => { setMenuOpen(false) }} />
            <Toggle text="Timeline" href="timeline" onChange={() => { setMenuOpen(false) }} />
            <Toggle text="Brief" href="brief" onChange={() => { setMenuOpen(false) }} />
          </div>
        }
      </nav>
    </div>
  );
}

export default Navbar;
