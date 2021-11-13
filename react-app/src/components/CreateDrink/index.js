import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addADrinkThunk } from "../../store/drinks";
import { hideModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distillery";


function CreateDrink() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [drinkName, setDrinkName] = useState("");
    const [description, setDescription] = useState("");
    const [drinkImage, setDrinkImage] = useState("");
    const [abv, setAbv] = useState("");



    const currentDistillery = useSelector((state) => state.distillery);

    const onSubmit = async (e) => {
        e.preventDefault();

        const newDrink = {
            name: drinkName,
            //   name matches what is on WTF form
            description: description,
            image: drinkImage,
            abv: abv,
            distillery_id: currentDistillery.id,
        };
    
        let response =  dispatch(addADrinkThunk(newDrink)).then(() =>
            dispatch(loadOneDistillery(currentDistillery.id))
        );
        if (response) {
            setErrors(response);
        }

        dispatch(hideModal());
    };

    return (
        <>
            <div>
                <h1>Add a Drink</h1>
            </div>
            <form onSubmit={onSubmit}>
                {/* <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul> */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={drinkName}
                        required
                        onChange={(e) => setDrinkName(e.target.value)}
                        placeholder="Drink Name"
                    />
                </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        value={drinkImage}
                        type="text"
                        id="text"
                        multiple
                        onChange={(e) => setDrinkImage(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="abv">
                        <input
                            type="number"
                            id="abv"
                            required
                            value={abv}
                            placeholder="ABV"
                            onChange={(e) => setAbv(e.target.value)}
                            step="1"
                            min="1"
                            max="80"
                        />{" "}
                        <span>%</span>
                    </label>
                </div>
                <button>Create</button>
            </form>
        </>
    );
}

export default CreateDrink;
