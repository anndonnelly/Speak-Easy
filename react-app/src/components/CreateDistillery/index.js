import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { hideModal } from "../../store/modal";
import { createDistillery } from "../../store/distilleries";

function CreateDistillery() {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [distilleryName, setDistilleryName] = useState("");
    const [street, setStreet] = useState("");
    const [City, setCity] = useState("");
    const [state, setState] = useState("");
    const [logo, setLogo] = useState("");


    const onSubmit = async (e) => {
        e.preventDefault();

        const newDistillery = {
            name: distilleryName,
            street: street,
            city: City,
            state: state,
            logo: logo,
        };
        console.log("newDistilllery???????", newDistillery)
        let response = await dispatch(createDistillery(newDistillery));
        if (response) {
            setErrors(response);
        }

        dispatch(hideModal());
    };

    return (
        <>
            <div>
                <h1>Start a Distillery</h1>
            </div>
            <form onSubmit={onSubmit}>
                <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div>
                    {/* <label>Name</label> */}
                    <input
                        type="text"
                        name="name"
                        value={distilleryName}
                        required
                        onChange={(e) => setDistilleryName(e.target.value)}
                        placeholder="Distillery Name"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="description"
                        required
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="Street"
                    />
                </div>
                <div>
                    <input
                        value={City}
                        type="text"
                        id="text"
                        required
                        multiple
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        />
                </div>
                <div>
                    <input
                        value={state}
                        type="text"
                        id="text"
                        required
                        multiple
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        />
                </div>
                <div>
                    <label htmlFor="abv">
                        <input
                            type="text"
                            id="logo"
                            required
                            value={logo}
                            placeholder="ABV"
                            onChange={(e) => setLogo(e.target.value)}
                            placeholder="Logo Image"
                        />
                    </label>
                </div>
                <button>Create</button>
            </form>
        </>
    );
}

export default CreateDistillery;
