import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>BAYASTAN</h1>
          <nav className="link">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/client'}>Client</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
