import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg"; // Add your logo image here

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links-desktop">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="navbar-links-mobile">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Navbar;
