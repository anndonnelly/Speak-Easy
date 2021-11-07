import React, { useState } from 'react'
import { Modal } from "../../context/Modal";
import LoginForm from '../auth/LoginForm'

//         {modal}
//         <button onClick={() => setShowModal((prevState) => !prevState)}>
//           Login
//         </button>


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="modal">
      <a href="#" onClick={loginHandler}>
        Log in
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;