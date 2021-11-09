import React from "react";

import styles from "./Distilleries.module.css";

const DistilleryCard = ({ distillery }) => {
    if (!distillery) return null;
    return (
        <div className={styles.distilleryContainer}>
            <div className={styles.indivDist}>
                <div className={styles.distName}>{distillery.name}</div>
                <div className={styles.distName}>{distillery.street}</div>
            </div>
        </div>
    );
};

export default DistilleryCard;
