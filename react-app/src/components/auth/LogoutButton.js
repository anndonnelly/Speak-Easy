import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "../Navigation/NavBar.css";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        await dispatch(logout());
    };

    return (
        <div className="nav-link">
            <button className="nav-button" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
