import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../auth/SignUpForm";

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const signupHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="modal">
      <a href="#" onClick={signupHandler}>
        Sign Up
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </div>
  );
}

export default SignUpFormModal;