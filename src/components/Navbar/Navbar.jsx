import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar-bg ${showNavbar ? "" : "navbar-sticky"}`}>
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
