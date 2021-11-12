import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./DistilleryButton.module.css";

const DistilleryButton = () => {
    const history = useHistory();

    const distillery = () => {
        history.push("/distilleries");
    };

    return (
        <button className={styles.navButton} onClick={distillery}>
            Distilleries
        </button>
    );
};

export default DistilleryButton;
