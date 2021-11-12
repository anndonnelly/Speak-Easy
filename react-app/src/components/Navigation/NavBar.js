import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "../Profile/ProfileButton";
import LoginModal from "../LoginModal/index";
import SignUpFormModal from "../SignUpModal/index";
import SearchBar from "../Search/SearchBar";


import styles from "./NavBar.module.css";
import DistilleryButton from "../Distilleries/DistilleryButton";

//TODO Profile and LogoutButton need styling

const NavBar = () => {
    const user = useSelector((state) => state.session.user);
    const sessionLoaded = useSelector((state) => state.session.loaded);

    return (
        <nav className={styles.nav}>

          <div className={styles.navbarLeft}>
            <NavLink to="/" exact={true} activeClassName={styles.active}>
              <img
                className={styles.logo}
                src="https://res.cloudinary.com/dis83syog/image/upload/v1636326107/SpeakEasy/android-chrome-512x512_w7x1ff.png"
                alt="logo"
              ></img>
            </NavLink>
          </div>
          {sessionUser && (
            <div className={styles.dContainer}>
              {/* <NavLink to="/drinks">
                <DrinksFeed></DrinksFeed>
              </NavLink> */}
              <NavLink to="/distilleries">Distilleries</NavLink>
            </div>
          )}
          {/* <div>
            <SearchBar />
          </div> */}
          <div className={styles.navbarRight}>
            {!sessionUser && (
              <>
                <NavLink
                  className={styles.navLink}
                  to="/login"
                  exact={true}
                  activeClassName={styles.active}
                >
                  <LoginModal />
                </NavLink>
                <NavLink
                  className={styles.navLink}
                  to="/sign-up"
                  exact={true}
                  activeClassName={styles.active}
                >
                  <SignUpFormModal />

                </NavLink>
            </div>
            {user && sessionLoaded && (
                <div className={styles.leftWrapper}>
                    <div className={styles.dContainer}>
                        <DistilleryButton />
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>
            )}
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
                {user && sessionLoaded && (
                    <div className={styles.navRightButtons}>
                        <ProfileButton />
                        <LogoutButton />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
