import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distillery";
import { getCheckinsThunk } from "../../store/checkins";
import { loadAllDrinks } from "../../store/drinks";
import { deleteDistillery } from "../../store/distilleries";

import InternalFooter from "../Footer/InternalFooter";
import DistilleryFeedSelection from "../DistilleryFeedSelection";
import CreateDrink from "../CreateDrink";
import EditDistillery from "../EditDistillery";

import styles from "./SingleDistillery.module.css";

const SingleDistillery = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { distilleryId } = useParams();

    const distillery = useSelector((state) => state.distillery);
    const currentUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
        dispatch(loadAllDrinks());
    }, [dispatch, distilleryId]);

    const createDrinkModal = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateDrink));
        dispatch(showModal());
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteDistillery(distilleryId));
        history.push("/distilleries");
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(EditDistillery));
        dispatch(showModal());
    };

    return (
        <div>
            {currentUser.id === distillery.owner_id ? (
                <div className={styles.btnWrapper}>
                    <div className={styles.buttonDiv}>
                        <button
                            className={styles.button}
                            onClick={createDrinkModal}>
                            Add a Drink
                        </button>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button
                            className={styles.button}
                            onClick={handleDelete}>
                            Delete Distillery
                        </button>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button
                            className={styles.button}
                            onClick={handleUpdate}>
                            Edit Distillery
                        </button>
                    </div>
                </div>
            ) : null}
            <div className={styles.singleDistillContainer}>
                <div>
                    <img src={distillery.logo} alt="Distillery Logo" />
                </div>
                <div className={styles.name}>{distillery.name}</div>
                <div className={styles.street}>{distillery.street}</div>
                <div className={styles.city}>{distillery.city}</div>
                <div className={styles.state}>{distillery.state}</div>
            </div>
            <DistilleryFeedSelection distillerId={distilleryId} />
            <InternalFooter />
        </div>
    );
};

export default SingleDistillery;
