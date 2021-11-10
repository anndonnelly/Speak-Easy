import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import {showModal, setCurrentModal, hideModal } from '../../store/modal'
import "./LoginForm.css";
import DistilleryLoginForm from './DistilleryLoginForm';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    dispatch(hideModal())
    history.push('/')
  };

  const demoLogin = async (e) => {
            e.preventDefault();
            const email = "demo@aa.io";
            const password = "password";
            const demo = await dispatch(login(email, password));
            dispatch(hideModal())
            if (demo) {
                return history.push("/");
            }
        };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const distilleryLoginButton = (e) => {
    e.preventDefault()
    dispatch(setCurrentModal(DistilleryLoginForm))
    dispatch(showModal())
  }

//   if (user) {
//      history.push('/')
//   }

  return (
    <>
        <form className="loginModal" onSubmit={onLogin}>
        <h2>User Login</h2>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <button type="submit" onClick={(e) => onLogin(e)}>
            Login
          </button>
          <button type="submit" onClick={demoLogin}>
                       User Demo Login
                     </button>
            <button onClick={distilleryLoginButton}>
              Distillery Login
            </button>
          </div>
        </form>
    </>
  );
};

export default LoginForm;
