import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { logout } from "../../store/session";

import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        return <Redirect to="/" />;
    };

    return (
        <button className={styles.navButton} onClick={onLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
