import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import styles from "../Navigation/NavBar.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        e.preventDefault();
        window.localStorage.clear();
        await dispatch(logout());
    };

    return (
        <div className="nav-link">
            <button className={styles.navButton} onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
