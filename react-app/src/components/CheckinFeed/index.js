import React, { useEffect, useState } from "react";
import { getCheckinsThunk } from "../../store/checkins";
import { useDispatch, useSelector } from "react-redux";
import CheckinCard from "../CheckinCard/CheckinCard";
import styles from "./CheckinFeed.module.css";
import PickDistillery from "../CreateCheckin/PickDistillery";
import { showModal, setCurrentModal } from "../../store/modal";

function CheckinsFeed() {
    const dispatch = useDispatch();

    const checkins = useSelector((state) => Object.values(state.checkins));

    useEffect(() => {
        dispatch(getCheckinsThunk());
    }, [dispatch]);

    const showCheckinModal = () => {
        dispatch(setCurrentModal(PickDistillery));
        // dispatch(setCurrentModal(CreateCheckin));
        dispatch(showModal());
    };

    return (
        <>
            <div>
                <button
                    className={styles.checkinModalButton}
                    onClick={showCheckinModal}>
                    Checkin
                </button>{" "}
                
            </div>
            {checkins
                .map((checkin) => (
                    <CheckinCard key={checkin.id} checkin={checkin} />
                ))
                .reverse()}
        </>
    );
}

export default CheckinsFeed;
