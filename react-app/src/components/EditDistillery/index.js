import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";
import { hideModal } from "../../store/modal";
import {updateDistillery} from "../../store/distilleries"
import { loadOneDistillery } from "../../store/distillery";

function CreateDistillery() {
    const dispatch = useDispatch();
    const distilleryId = useSelector(state => state.distillery.id)
    const [errors, setErrors] = useState([]);
    const [distilleryName, setDistilleryName] = useState("");
    const [street, setStreet] = useState("");
    const [City, setCity] = useState("");
    const [state, setState] = useState("");
    const [logo, setLogo] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        const newDistillery = {
            name: distilleryName,
            street: street,
            city: City,
            state: state,
            logo: logo,
        };
        let createdDistillery = dispatch(updateDistillery(distilleryId, newDistillery)).then(() =>
            dispatch(loadOneDistillery(distilleryId))
        )
        
        if (createdDistillery) {
            setErrors(createdDistillery);
        }
        dispatch(hideModal());
    };

    return (
        <>
            <div>
                <h1>Edit Your Distillery</h1>
            </div>
            <form onSubmit={onSubmit}>
                <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div>
                    
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
