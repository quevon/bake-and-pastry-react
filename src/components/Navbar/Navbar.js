import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar-bg">
        <div className="navbar">
          <div className="navbar-brand">
            <Link to="/">Your Logo</Link>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" exact>
              Home
            </NavLink>{" "}
            <NavLink to="/about">About</NavLink>{" "}
            <NavLink to="/services">Services</NavLink>{" "}
            <NavLink to="/contact">Contact</NavLink>{" "}
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
