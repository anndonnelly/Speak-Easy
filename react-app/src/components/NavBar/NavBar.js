import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import styles from "./NavBar.module.css";
//! Isn't being used can we delete?
const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <NavLink to="/" exact={true} activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact={true} activeClassName="active">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-up"
                        exact={true}
                        activeClassName="active">
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" exact={true} activeClassName="active">
                        Users
                    </NavLink>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;