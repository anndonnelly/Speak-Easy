import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateCheckin from "../../components/CreateCheckin/index";
import { showModal, setCurrentModal } from "../../store/modal";
import styles from "./DrinkCard.module.css";
import DistilleryCheckin from "./DistilleryCheckin";
import { loadSelectedDistillery } from "../../store/checkinmodal";
import { loadSelectedDrink } from "../../store/checkinmodal_pagetwo";


const DrinkCard = ({ drink }) => {
    const dispatch = useDispatch();
    const distillery = useSelector((state) => state?.distilleries);

    const checkin = (e) => {
        e.preventDefault();
        dispatch(loadSelectedDistillery(distillery.id));
        dispatch(loadSelectedDrink(drink.id));
        dispatch(setCurrentModal(DistilleryCheckin));
        console.log("test sfljkasf", distillery.id, drink.id)
        dispatch(showModal());
    };
    // console.log("DRINK",drink)
    // console.log("DISTIL", distillery)
    return (
        <div className={styles.drinkContainer}>
            <div className={styles.name}>{drink.name}</div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={drink.image} alt="" />
            </div>
            <div className={styles.rating}>Rating: {drink.rating}</div>
            <div>
                <button onClick={checkin}>+</button>
            </div>
        </div>
    );
};

export default DrinkCard;
