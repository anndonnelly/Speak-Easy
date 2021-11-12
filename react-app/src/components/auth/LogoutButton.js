import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import styles from "../Navigation/NavBar.module.css";

const LogoutButton = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)
    const onLogout = async (e) => {
        e.preventDefault();
        window.localStorage.clear();
        await dispatch(logout());
    };

    const profile = (e) => {
        e.preventDefault()
        history.push(`/users/${userId}`)
    }

    return (
        <div className="nav-link">
            <button className={styles.navButton} onClick={onLogout}>
                Logout
            </button>
            <button onClick={profile}>My Profile</button>
        </div>
    );
};

export default LogoutButton;
