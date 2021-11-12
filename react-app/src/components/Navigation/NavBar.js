import React from "react";
import { NavLink } from "react-router-dom";

import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "../Profile/ProfileButton";
import LoginModal from "../LoginModal/index";
import SignUpFormModal from "../SignUpModal/index";
import SearchBar from "../Search/SearchBar";

import styles from "./NavBar.module.css";

//TODO Profile and LogoutButton need styling

const NavBar = ({ user }) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbarLeft}>
                <NavLink to="/" exact={true} activeClassName={styles.active}>
                    <img
                        className={styles.logo}
                        src="https://res.cloudinary.com/dis83syog/image/upload/v1636326107/SpeakEasy/android-chrome-512x512_w7x1ff.png"
                        alt="logo"></img>
                </NavLink>
            </div>
            {user && (
                <div className={styles.dContainer}>
                    <NavLink to="/distilleries">Distilleries</NavLink>
                </div>
            )}
            <div>
                <SearchBar />
            </div>
            <div className={styles.navbarRight}>
                {!user && (
                    <>
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
                    </>
                )}
                {user && (
                    <div>
                        <ProfileButton />
                        <LogoutButton />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
