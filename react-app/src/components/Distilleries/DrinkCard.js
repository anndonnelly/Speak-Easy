import React from "react";
import { useDispatch } from "react-redux";
import CreateCheckin from "../../components/CreateCheckin/index";
import { showModal, setCurrentModal } from "../../store/modal";
import styles from "./DrinkCard.module.css";
const DrinkCard = ({ drink }) => {
    const dispatch = useDispatch();

    const checkin = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateCheckin));
        dispatch(showModal());
    };
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
