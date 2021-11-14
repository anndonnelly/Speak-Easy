import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../store/session";
import { hideModal } from "../../store/modal";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const sessionLoaded = useSelector((state) => state.session.loaded);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password)).catch((err) => setErrors(err.errors));
    };

    const demoLogin = (e) => {
        e.preventDefault();
        const email = "demo@aa.io";
        const password = "password";
        dispatch(login(email, password)).catch((err) => setErrors(err.errors));
        if (errors.length === 0) {
            dispatch(hideModal());
            history.push("/");
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (sessionLoaded && user) {
        history.push("/");
    }

    return (
        <form className={styles.loginModal}>
            <h2>User Login</h2>
            <ul className={styles.errors}>
                {errors.map((error, idx) => (
                    <li className={styles.error} key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                />
                <button type="submit" onClick={onLogin}>
                    Login
                </button>
                <button type="submit" onClick={demoLogin}>
                    User Demo Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
