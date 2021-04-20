import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [isExpanded, setExpanded] = useState("false");

  function toggleNav() {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  }
  return (
    <div className={styles['nav-wrapper']}>
      <a onClick={toggleNav} className={styles['toggle-button']}>
        <span className={styles['bar']}></span>
        <span className={styles['bar']}></span>
        <span className={styles['bar']}></span>
      </a>
      <nav className={`${styles['nav-links']} ${isExpanded ? "" : styles['active']}`}>
        <ul>
          <li>
            <NavLink exact className={styles['nav-link']} activeClassName={styles['is-active']} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact className={styles['nav-link']} activeClassName={styles['is-active']} to="/recipelist">
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink exact className={styles['nav-link']} activeClassName={styles['is-active']} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
