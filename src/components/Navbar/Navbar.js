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
            <Link to="/">Your Logo</Link> {/* Use Link instead of anchor */}
          </div>
          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" exact>
              Home
            </NavLink>{" "}
            {/* Use NavLink instead of anchor */}
            <NavLink to="/about">About</NavLink>{" "}
            {/* Use NavLink instead of anchor */}
            <NavLink to="/services">Services</NavLink>{" "}
            {/* Use NavLink instead of anchor */}
            <NavLink to="/contact">Contact</NavLink>{" "}
            {/* Use NavLink instead of anchor */}
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
