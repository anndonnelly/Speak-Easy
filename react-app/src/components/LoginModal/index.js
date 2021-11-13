import React from "react";
// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import styles from "./LoginModal.module.css";
import { showModal, setCurrentModal } from "../../store/modal";

function LoginFormModal() {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(LoginForm));
        dispatch(showModal());
    };

    return (
        <>
            <button className={styles.navButton} onClick={handleLogin}>
                Log In
            </button>
        </>
    );
}

export default LoginFormModal;
