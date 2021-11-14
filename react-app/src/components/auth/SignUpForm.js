import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signUp } from "../../store/session";
import { hideModal } from "../../store/modal";

import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const sessionLoaded = useSelector((state) => state.session.loaded);

    const [errors, setErrors] = useState([]);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            dispatch(signUp(username, email, password)).catch((err) =>
                setErrors(err.errors)
            );
            if (errors.length === 0) {
                dispatch(hideModal());
                history.push("/");
            }
        }
    };

    const updateUserName = (e) => {
        setUserName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (sessionLoaded && user) {
        history.push("/");
    }

    return (
        <form className={styles.signUpModal}>
            <ul className={styles.errors}>
                {errors.map((error, idx) => (
                    <li className={styles.error} key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
            <div>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    name="username"
                    onChange={updateUserName}
                    value={username}
                    required={true}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                    required={true}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                    required={true}></input>
            </div>
            <div>
                <label htmlFor="repeat_password">Repeat Password</label>
                <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}></input>
            </div>
            <button type="submit" onClick={onSignUp}>
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;
