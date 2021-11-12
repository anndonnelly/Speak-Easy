import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addADrinkThunk } from "../../store/drinks";
import { hideModal } from "../../store/modal";
// import { useParams } from "react-router";

function CreateDrink() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [drinkName, setDrinkName] = useState("");
    const [description, setDescription] = useState("");
    const [drinkImage, setDrinkImage] = useState("");
    const [abv, setAbv] = useState("");
    const [rating, setRating] = useState("");
    //   const {distilleryId} = useParams()
    //     console.log("------>hit", distilleryId);
    const currentDistillery = useSelector((state) => state.distilleries);

    const onSubmit = async (e) => {
        e.preventDefault();

        const newDrink = {
            name: drinkName,
            //   name matches what is on WTF form
            description: description,
            image: drinkImage,
            abv: abv,
            rating: rating,
            distillery_id: currentDistillery.id,
        };
        // console.log("*******", currentDistillery.id);
        let response = await dispatch(addADrinkThunk(newDrink));
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
                        value={drinkName}
                        onChange={(e) => setDrinkName(e.target.value)}
                        placeholder="Drink Name"
                    />
                </div>
                <div>
                    {/* <label>Description</label> */}
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <div>
                    <input
                        value={drinkImage}
                        type="file"
                        id="input"
                        multiple
                        onChange={(e) => setDrinkImage(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="abv">
                        <input
                            type="number"
                            id="abv"
                            value={abv}
                            placeholder="ABV"
                            onChange={(e) => setAbv(e.target.value)}
                            step="0.1"
                            min="1"
                            max="80"
                        />{" "}
                        <span>%</span>
                    </label>
                </div>
                <div>
                    <label>Rating</label>
                    <select
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                        <option value="" disabled>
                            --Rating--
                        </option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button>Create</button>
            </form>
        </>
    );
}

export default CreateDrink;
