import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadDistilleries } from "../../store/distilleries";
import DistilleryCard from "./DistilleryCard";
import PickDistillery from "../CreateCheckin/PickDistillery";
import styles from "./Distilleries.module.css";

const Distilleries = () => {
    const dispatch = useDispatch();
    const distilleries = useSelector((state) =>
        Object.values(state.distilleries)
    );

    const showCheckinModal = () => {
        dispatch(setCurrentModal(PickDistillery));
        // dispatch(setCurrentModal(CreateCheckin));
        dispatch(showModal());
    };
    useEffect(() => {
        dispatch(loadDistilleries());
    }, [dispatch]);

    if (!distilleries.length === 0) {
        return null;
    }

    return (
        <>
            <div>
                {/* <button>Distilleries</button> */}
                <button
                    className={styles.checkinModalButton}
                    onClick={showCheckinModal}>
                    Checkin
                </button>
            </div>
            <div className={styles.feedWrapper}>
                {distilleries.length &&
                    distilleries.map((distillery) => (
                        <div key={distillery.id} className={styles.distilleryCard}>
                            <DistilleryCard distillery={distillery} />
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Distilleries;
