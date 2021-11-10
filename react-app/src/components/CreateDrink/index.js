import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addADrinkThunk } from "../../store/drinks";
import { hideModal } from "../../store/modal";

function CreateDrink() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [drinkName, setDrinkName] = useState("");
  const [desription, setDescription] = useState("");
  const [drinkImage, setDrinkImage] = useState("")
  const [abv, setAbv] = useState("");

  const currentDistillery = useSelector(
    (state) => state.distilleriesSession.distillery
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const newDrink = {
      drinkName: drinkName,
      desription: desription,
      drinkImage: drinkImage,
      abv: abv,
      distillery_id: currentDistillery.id,
    };
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
            name="name"
            value={drinkName}
            onChange={(e) => setDrinkName(e.target.value)}
            placeholder="Drink Name"
          />
        </div>
        <div>
          {/* <label>Description</label> */}
          <textarea
            name="description"
            value={desription}
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
            onChange={(e) => setDrinkImage(e.target.value)}
          ></input>
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
              min="0"
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
