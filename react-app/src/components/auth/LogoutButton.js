import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../store/session";

import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={styles.navLink}>
            <button className={styles.navButton} onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
