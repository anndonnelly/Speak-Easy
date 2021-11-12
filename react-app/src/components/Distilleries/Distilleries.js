import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDistilleries } from "../../store/distilleries";
import DistilleryCard from "./DistilleryCard";

import styles from "./Distilleries.module.css";

const Distilleries = () => {
    const dispatch = useDispatch();
    const distilleries = useSelector((state) =>
        Object.values(state.distilleries)
    );

    useEffect(() => {
        dispatch(loadDistilleries());
    }, [dispatch]);

    if (!distilleries.length) {
        return null;
    }

    return (
        <div className={styles.feedWrapper}>
            {distilleries.map((distillery, idx) => (
                <div key={idx} className={styles.distilleryCard}>
                    <DistilleryCard
                        key={distillery.id}
                        distillery={distillery}
                    />
                </div>
            ))}
        </div>
    );
};
export default Distilleries;
