import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginDistillery } from "../../store/distillery_session";
import { hideModal } from "../../store/modal";
import "./LoginForm.css";

const DistillerySignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [street, setStree] = useState("");
    const [errors, setErrors] = useState([]);

    const distilleryLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(loginDistillery(email, password));
        if (data) {
            setErrors(data);
        }
        window.localStorage.setItem("distillery", "distillery");
        dispatch(hideModal());
        return history.push("/distilleries"); //TODO: add correct id
        //TODO need to fix redirect
    };

    const distillerydemoLogin = async (e) => {
        e.preventDefault();
        const email = "yellowrose@gmail.com";
        const password = "password2";
        await dispatch(loginDistillery(email, password));
        window.localStorage.setItem("distillery", "distillery");
        dispatch(hideModal());
        return history.push("/distilleries"); //TODO: add correct id
        //TODO need to fix redirect
    };

    return (
        <>
            <form className="loginModal">
                <h2>Create Distillery</h2>
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
                    <button type="submit" onClick={distilleryLogin}>
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

export default DistillerySignUpForm;
