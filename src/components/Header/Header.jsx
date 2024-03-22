import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg"
const Header = () => {
  return (
    <header className="header-component">
      <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
      <nav className="menu">
        <NavLink to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }>
          Accueil
        </NavLink>
        <NavLink to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }>
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;