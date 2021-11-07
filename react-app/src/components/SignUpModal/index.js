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
      <button onClick={signupHandler}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm onClose={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default SignUpFormModal;