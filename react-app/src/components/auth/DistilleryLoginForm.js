import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { loginDistillery } from "../../store/distillery_session";
import { hideModal } from "../../store/modal";
import "./LoginForm.css";

const DistilleryLoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const distilleryLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(loginDistillery(email, password));
        if (data) {
            setErrors(data);
        }
        await dispatch(hideModal());
        history.push("/distilleries"); //TODO: add correct id
    };

    const distillerydemoLogin = async (e) => {
        e.preventDefault();
        const email = "yellowrose@gmail.com";
        const password = "password2";
        const demo = await dispatch(loginDistillery(email, password));
        dispatch(hideModal());
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
            <form className="loginModal" onSubmit={distilleryLogin}>
                <h2>Distillery Login</h2>
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
                    <button type="submit" onClick={(e) => distilleryLogin(e)}>
                        Login
                    </button>
                    <button type="submit" onClick={distillerydemoLogin}>
                        Distillery Demo Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default DistilleryLoginForm;
