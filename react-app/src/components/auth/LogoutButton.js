import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../store/session";

import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = () => {
        dispatch(logout());
        window.localStorage.clear();
        history.push("/login");
    };

    return (
        <button className={styles.navButton} onClick={onLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
