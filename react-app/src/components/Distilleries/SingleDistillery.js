import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distilleries";
import { getCheckinsThunk } from "../../store/checkins";
import { useParams } from "react-router-dom";
import styles from "./SingleDistillery.module.css";
import CheckinCard from "../CheckinCard/CheckinCard";

const SingleDistillery = () => {
    const { distilleryId } = useParams();
    const dispatch = useDispatch();
    const distillery = useSelector((state) => state.distilleries);
    const checkins = useSelector((state) => state.checkins);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
    }, [dispatch, distilleryId]);

    let checkinCards;
    if (checkins) {
        checkinCards = Object.values(checkins).map((checkin) => {
            if (distillery.checkin_ids.includes(checkin.id)) {
                return <CheckinCard checkin={checkin} />;
            }
            return null;
        });
    }

    return (
        <div className={styles.singleDistillContainer}>
            <div>
                <img src={distillery.logo} alt="Distillery Logo" />
            </div>
            <h1>{distillery.name}</h1>
            <div>{distillery.street}</div>
            <div>{distillery.city}</div>
            <div>{distillery.state}</div>
            {/* <div>{distillery.checkin_ids}</div> */}
            <div>{distillery.drink_ids}</div>
            <div>{checkinCards}</div>
        </div>
    );
};

export default SingleDistillery;
