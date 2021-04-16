import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isExpanded, setExpanded] = useState("false");

  function toggleNav() {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  }
  return (
    <div className="nav-wrapper">
      <a href="/#" onClick={toggleNav} className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <nav className={`nav-links${isExpanded ? "" : " active"}`}>
        <ul>
          <li>
            <NavLink exact className="nav-link" activeClassName='is-active' to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact className="nav-link" activeClassName='is-active' to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
