import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { hideModal } from "../../store/modal";
import "./LoginForm.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        await dispatch(hideModal());
        history.push("/");
    };

    const demoLogin = async (e) => {
        e.preventDefault();
        const email = "demo@aa.io";
        const password = "password";
        await dispatch(login(email, password));
        await dispatch(hideModal());
        history.push("/");
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <form className="loginModal">
                <h2>User Login</h2>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
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
        </>
    );
};

export default LoginForm;
