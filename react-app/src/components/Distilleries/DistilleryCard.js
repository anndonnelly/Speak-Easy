import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDistilleries } from "../../store/distilleries";
import styles from "./Distilleries.module.css";

const DistilleryCard = () => {
    const dispatch = useDispatch();

    const distilleries = useSelector((state) =>
        Object.values(state.distilleries)
    );
    console.log(distilleries, "!!!!!!!!!!!!!!!!!!!!");

    useEffect(() => {
        dispatch(loadDistilleries());
    }, [dispatch]);

    if (!distilleries) {
        return null;
    }
    return (
        <div className={styles.distilleryContainer}>
            {distilleries &&
                distilleries?.map((distillery) => (
                    <div>
                        <div className={styles.distName}>
                            {distillery?.name}
                        </div>
                        <div className={styles.distName}>
                            {distillery?.street}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DistilleryCard;
