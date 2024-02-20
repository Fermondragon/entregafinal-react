import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import logo from "./logo2.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="logo" width={400} />
      </Link>
    </div>
  );
};

export default Header;
