import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import styles from "./LoginModal.module.css";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.session.user);

    if (user) {
        return <>{/* <ProfileButton></ProfileButton> */}</>;
    }

    return (
        <>
            <button
                className={styles.navButton}
                onClick={() => setShowModal(true)}>
                Log In
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
