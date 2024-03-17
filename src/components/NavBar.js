import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../styles/resources/logo.png";

const NavBar = () => {

  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        alt="surreal estate logo with small castle"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;