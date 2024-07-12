import React from "react";
import { NavLink } from "react-router-dom";
// import { FaAlignJustify } from "react-icons/fa6";

function Navbar() {
  
  return (
    <div>

      {/* <FaAlignJustify /> */}
      <nav className="nav-container">
        <div className="nav-brand">
          <a href="#">
            <img src="/src/assets/images/logo.jpg" alt="logo" />
          </a>
        </div>
        <ul className="control-nav-menu">
          <li>
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={"nav-link"}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/location" className={"nav-link"}>
              Location
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={"nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" className={"nav-link"}>
              Contact
            </NavLink>
          </li>
        </ul>
        <button type="button">Login</button>
      </nav>
    </div>
  );
}

export default Navbar;
