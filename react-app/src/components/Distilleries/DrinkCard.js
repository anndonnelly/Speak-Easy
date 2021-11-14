import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import styles from "./DrinkCard.module.css";
import DistilleryCheckin from "./DistilleryCheckin";
import { loadSelectedDistillery } from "../../store/checkinmodal";
import { loadSelectedDrink } from "../../store/checkinmodal_pagetwo";
import { updateDrinkThunk } from "../../store/drinks";
import { removeDrinkThunk } from "../../store/drinks";

const DrinkCard = ({ drink }) => {
    const dispatch = useDispatch();
    const distillery = useSelector((state) => state?.distillery);
    const [edit, setEdit] = useState(false);
    const [editDrinkName, setEditDrinkName] = useState(drink.name);
    const [editDescription, setEditDescription] = useState(drink.description);
    const [editAbv, setEditAbv] = useState(drink.abv);
    const [editImage, setEditImage] = useState(drink.image);
    const [errors, setErrors] = useState([]);

    const checkin = (e) => {
        e.preventDefault();
        dispatch(loadSelectedDistillery(distillery.id));
        dispatch(loadSelectedDrink(drink.id));
        dispatch(setCurrentModal(DistilleryCheckin));
        dispatch(showModal());
    };

    const handleEditDrink = async (e) => {
        e.preventDefault();
        const editedDrink = {
            name: editDrinkName,
            description: editDescription,
            image: editImage,
            abv: editAbv,
            distillery_id: distillery.id,
        };

        dispatch(updateDrinkThunk(drink.id, editedDrink));
        setEdit(false);
    };

    const deleteDrink = () => {
        dispatch(removeDrinkThunk(drink.id));
    };

    if (edit) {
        return (
            <div className="edit-card">
                <form onSubmit={handleEditDrink}>
                    <ul>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={editDrinkName}
                            required
                            onChange={(e) => setEditDrinkName(e.target.value)}
                            placeholder="Drink Name"
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            type="text"
                            name="description"
                            required
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input
                            value={editImage}
                            type="text"
                            id="text"
                            onChange={(e) =>
                                setEditImage(e.target.value)
                            }></input>
                    </div>
                    <div>
                        <label htmlFor="abv">
                            <input
                                type="number"
                                id="abv"
                                required
                                value={editAbv}
                                placeholder="ABV"
                                onChange={(e) => setEditAbv(e.target.value)}
                                step="1"
                                min="1"
                                max="80"
                            />{" "}
                            <span>%</span>
                        </label>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.drinkContainer}>
            <div className={styles.name}>{drink.name}</div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={drink.image} alt="" />
            </div>
            <div className={styles.rating}>
                Description: {drink.description}
            </div>
            <div className={styles.rating}>ABV: {drink.abv}</div>
            <div className={styles.buttonContainer}>
                <div className={styles.btnWrapper}>
                    <button className={styles.button} onClick={checkin}>
                        Checkin
                    </button>
                </div>
                <div className={styles.btnWrapper}>
                    <button
                        className={styles.button}
                        onClick={() => setEdit(true)}>
                        Edit
                    </button>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.button} onClick={deleteDrink}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DrinkCard;
