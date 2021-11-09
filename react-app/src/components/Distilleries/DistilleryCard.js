import React from "react";

import styles from "./DistilleryCard.module.css";

const DistilleryCard = ({ distillery }) => {
    if (!distillery) return null;
    return (
        <div className={styles.distilleryContainer}>
            <div>
                <div className={styles.distName}>{distillery.name}</div>
                <div className={styles.distStreet}>{distillery.street}</div>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.img}
                        src={distillery.logo}
                        alt="distillery logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default DistilleryCard;
