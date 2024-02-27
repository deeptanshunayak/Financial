import React, { useState,useEffect } from "react";
import web1 from "../src/images/Rupee solutions.svg";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
 
  return (
    <>
      <nav className="main-nav1">
        {/* 1st logo part  */}
        <div className="logo">
        
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link1 mobile-menu-link1" : "menu-link1"
          }>
          <ul>
            <li>
              <NavLink to="#ruloans">EMI</NavLink>
            </li>
            <li>
              <NavLink to="/">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/">Eligibility</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Features</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Documents</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Fees & Charges</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">FAQ's</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;