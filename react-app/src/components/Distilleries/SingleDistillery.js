import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distilleries";
import { useParams } from "react-router-dom";
import styles from "./SingleDistillery.module.css"

const SingleDistillery = () => {
    const { distilleryId } = useParams();
    console.log(distilleryId);
    const dispatch = useDispatch();
    const distillery = useSelector((state) => state.distilleries);
    console.log("sdfghjkl;", distillery);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
    }, [dispatch, distilleryId]);

    return (
        <div className={styles.singleDistillContainer}>
            <div>
                <img src={distillery.logo} alt="Distillery Logo" />
            </div>
            <h1>{distillery.name}</h1>
            <div>{distillery.street}</div>
            <div>{distillery.city}</div>
            <div>{distillery.state}</div>
            <div>{distillery.checkin_ids}</div>
            <div>{distillery.drink_ids}</div>
        </div>
    );
};

export default SingleDistillery;
