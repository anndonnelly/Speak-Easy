import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";

const LoginForm = ({ setShowModal }) => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const onLogin = (e) => {
        e.preventDefault();
        setErrors([]);

        dispatch(login(email, password)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        setShowModal(false);
        return history.push("/");
    };

    const demoLogin = async (e) => {
        e.preventDefault();
        const email = "demo@aa.io";
        const password = "password";
        const demo = await dispatch(login(email, password));
        if (demo) {
            return history.push("/");
        }
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    //? Not sure what this is doing here.
    // if (user) {
    //     return <Redirect to="/" />;
    // }

    if (user) {
        setShowModal(false);
    }

    return (
        <form className="loginModal" onSubmit={onLogin}>
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
                    onChange={setEmail}
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
            </div>
            <div>
                <button type="submit" onClick={(e) => onLogin(e)}>
                    Login
                </button>
            </div>
            <div>
                <button type="submit" onClick={demoLogin}>
                    Demo Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
