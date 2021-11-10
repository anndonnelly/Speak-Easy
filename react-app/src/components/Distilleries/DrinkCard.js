import React from "react";
import styles from "./DrinkCard.module.css";
const DrinkCard = ({ drink }) => {
    return (
        <div className={styles.drinkContainer}>
            <div className={styles.name}>{drink.name}</div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={drink.image} alt="" />
            </div>
            <div className={styles.rating}>Rating: {drink.rating}</div>
        </div>
    );
};

export default DrinkCard;
