import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { loginDistillery } from '../../store/distillery_session';
import "./LoginForm.css";

const DistilleryLoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(loginDistillery(email, password));
    if (data) {
      setErrors(data);
    }
    history.push('/distilleries') //TODO: add correct id
  };

  const demoLogin = async (e) => {
            e.preventDefault();
            const email = "yellowrose@gmail.com";
            const password = "password2";
            const demo = await dispatch(loginDistillery(email, password));
            if (demo) {
                return history.push("/distilleries"); //TODO: add correct id
            }
        };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

//   if (user) {
//      history.push('/')
//   }

  return (
    <>
        <form className="loginModal" onSubmit={onLogin}>
        <h2>Distillery Login</h2>
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
                       Distillery Demo Login
                     </button>
          </div>
        </form>
    </>
  );
};

export default DistilleryLoginForm;
