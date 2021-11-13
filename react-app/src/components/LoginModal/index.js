import React from "react";
import { useDispatch } from "react-redux";
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
        <button className={styles.navButton} onClick={handleLogin}>
            Log In
        </button>
    );
}

export default LoginFormModal;
