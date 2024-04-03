// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="topnav">
      <Link to="/" className="logo">
        Profile
      </Link>
      <div className="topnav-links">
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/news" className="nav-link">
          Offer
        </Link>
        <Link to="/contact" className="nav-link">
          Settings
        </Link>
        <Link to="/about" className="nav-link">
          Sign Out
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
