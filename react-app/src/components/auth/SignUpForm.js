import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { signUp } from "../../store/session";
import { hideModal } from "../../store/modal";

import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const sessionLoaded = useSelector((state) => state.session.loaded);

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            dispatch(signUp(username, email, password)).catch((err) =>
                setErrors(err.errors)
            );
            if (!errors) {
                dispatch(hideModal());
                history.push("/");
            }
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
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

    if (user && sessionLoaded) {
        history.push("/");
    }

    return (
        <form className={styles.signUpModal}>
            <div>
                {errors.map((error, idx) => (
                    <div key={idx}>{error}</div>
                ))}
            </div>
            <div>
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    onChange={updateUsername}
                    value={username}></input>
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}></input>
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}></input>
            </div>
            <div>
                <label>Repeat Password</label>
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
