import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginModal from "../LoginModal/index";
import SignUpFormModal from "../SignUpModal/index";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="navbar-left">
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="logo"
              src="https://res.cloudinary.com/dis83syog/image/upload/v1636326107/SpeakEasy/android-chrome-512x512_w7x1ff.png"
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <div className="navbar-right">
          <NavLink
            className="nav-link"
            to="/login"
            exact={true}
            activeClassName="active"
          >
            <LoginModal />
          </NavLink>
          <NavLink
            className="nav-link"
            to="/sign-up"
            exact={true}
            activeClassName="active"
          >
            <SignUpFormModal />
          </NavLink>
          {/* <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink> */}
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
