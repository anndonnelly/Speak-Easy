import React from "react";
import { Link } from "react-router-dom";
import styles from "./DistilleryCard.module.css";

const DistilleryCard = ({ distillery }) => {
    return (
        <div className={styles.distilleryContainer}>
            <div className={styles.name}>
                <Link
                    className={styles.link}
                    to={`/distilleries/${distillery.id}`}>
                    {distillery.name}
                </Link>
            </div>
            <div className={styles.street}>{distillery.street}</div>
            <div className={styles.imgContainer}>
                <Link to={`/distilleries/${distillery.id}`}>
                    <img
                        className={styles.img}
                        src={distillery.logo}
                        alt="distillery logo"
                    />
                </Link>
            </div>
        </div>
    );
};

export default DistilleryCard;
