import React from "react";
import navbarCss from "./Navbar.module.css";
import image from "../../../src/images/image.jpg";

const Navbar = () => {
  return (
    <div className={navbarCss.navbar}>
      <ul className={navbarCss.navList}>
        <li>
          <a href="/" className={navbarCss.navTitle}>
            Doctor Guide
          </a>
        </li>
        <li>
          <a href="/" className={navbarCss.navItem}>
            Home
          </a>
        </li>
        <li>
          <a href="/service" className={navbarCss.navItem}>
            Service
          </a>
        </li>
        <li>
          <a href="/about" className={navbarCss.navItem}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" className={navbarCss.navItem}>
            Contact
          </a>
        </li>
        <li>
          <a href="/info" className={navbarCss.navItem}>
            Info
          </a>
        </li>
        <li>
          <button className={navbarCss.loginButton}>LOGIN</button>
        </li>
        <li>
          <button className={navbarCss.loginButton}>SIGNUP</button>
        </li>
        <li>
          <img src={image} alt="avatar" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
