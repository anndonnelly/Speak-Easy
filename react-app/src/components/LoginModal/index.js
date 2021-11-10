import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import styles from "./LoginModal.module.css";
import {showModal, setCurrentModal} from "../../store/modal"

function LoginFormModal() {
    // const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    if (user) {
        return <>{/* <ProfileButton></ProfileButton> */}</>;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(LoginForm))
        dispatch(showModal())
    }

    return (
        <>
            <button
                className={styles.navButton}
                onClick={handleLogin}>
                Log In
            </button>
            {/* {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal> */}
            {/* )} */}
        </>
    );
}

export default LoginFormModal;
