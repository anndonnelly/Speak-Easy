import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginModal from "../LoginModal/index";
import SignUpFormModal from "../SignUpModal/index";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navbarLeft}>
                    <NavLink
                        to="/"
                        exact={true}
                        activeClassName={styles.active}>
                        <img
                            className={styles.logo}
                            src="https://res.cloudinary.com/dis83syog/image/upload/v1636326107/SpeakEasy/android-chrome-512x512_w7x1ff.png"
                            alt="logo"></img>
                    </NavLink>
                    <NavLink className={styles.drinks} to="/drinks">
                        Drinks
                    </NavLink>
                </div>
                <div className={styles.navbarRight}>
                    <NavLink
                        className={styles.navLink}
                        to="/login"
                        exact={true}
                        activeClassName={styles.active}>
                        <LoginModal />
                    </NavLink>
                    <NavLink
                        className={styles.navLink}
                        to="/sign-up"
                        exact={true}
                        activeClassName={styles.active}>
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
