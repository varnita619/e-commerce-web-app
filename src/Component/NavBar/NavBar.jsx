import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/assets/websitelogo.png";
import user from "./../../assets/assets/user";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        ></img>
      </div>
      <div className="main-components">
        <NavLink className="individual-component" to="/">
          Product Store
        </NavLink>
        <NavLink className="individual-component" to="/contact">
          Contact
        </NavLink>
      </div>

      <div className="user-container">
        <img src={user} alt="user" className="user-icon" />
        <h4>GAGAN</h4>
      </div>
    </div>
  );
};
