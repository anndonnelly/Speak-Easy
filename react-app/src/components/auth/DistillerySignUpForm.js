import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createDistillery } from "../../store/distilleries";
import { hideModal } from "../../store/modal";
import "./LoginForm.css";

const DistillerySignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [logo, setLogo] = useState("");
    const [errors, setErrors] = useState([]);

    const distillerySignup = async (e) => {
        e.preventDefault();
        const data = await dispatch(
            createDistillery(name, street, city, state, logo)
        );
        if (data) {
            setErrors(data);
        }
        dispatch(hideModal());
        return history.push("/distilleries");
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
                    <label htmlFor="name">Distillery Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Distillery Name"
                        value={name}
                        onChange={setName}
                    />
                </div>
                <div>
                    <label htmlFor="street">Street</label>
                    <input
                        name="street"
                        type="text"
                        placeholder="Street"
                        value={street}
                        onChange={setStreet}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        name="city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={setCity}
                    />
                    <label htmlFor="state">State</label>
                    <input
                        name="state"
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={setState}
                    />
                    <label htmlFor="logo">Logo</label>
                    <input
                        name="logo"
                        type="file"
                        placeholder="Logo"
                        value={logo}
                        onChange={setLogo}
                    />
                    <button type="submit" onClick={distillerySignup}>
                        Create Distillery
                    </button>
                </div>
            </form>
        </>
    );
};

export default DistillerySignUpForm;
