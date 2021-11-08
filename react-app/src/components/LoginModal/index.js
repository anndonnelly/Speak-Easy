import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm";
import styles from "./LoginModal.module.css";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className={styles.navButton}
                onClick={() => setShowModal(true)}>
                Log In
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm onClose={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
