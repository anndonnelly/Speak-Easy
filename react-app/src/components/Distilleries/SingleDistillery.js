import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distillery";
import { getCheckinsThunk } from "../../store/checkins";
import { loadAllDrinks } from "../../store/drinks";
import CheckinCard from "../CheckinCard/CheckinCard";
import { deleteDistillery } from "../../store/distilleries";
import styles from "./SingleDistillery.module.css";
// import DistilleryCheckin from "./DistilleryCheckin";

import CreateDrink from "../CreateDrink";
import DrinkCard from "./DrinkCard";

const SingleDistillery = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { distilleryId } = useParams();

    const [selection, setSelection] = useState(false);

    const distillery = useSelector((state) => state.distillery);
    const checkins = useSelector((state) => state.checkins);
    const drinks = useSelector((state) => state.drinks);
    const currentUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
        dispatch(loadAllDrinks());
    }, [dispatch, distilleryId]);

    let checkinCards;
    if (checkins) {
        checkinCards = Object.values(checkins)
            .map((checkin) => {
                if (distillery.checkin_ids?.includes(checkin.id)) {
                    return <CheckinCard checkin={checkin} />;
                }
                return null;
            })
            .reverse();
    }

    const createDrinkModal = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateDrink));
        dispatch(showModal());
    };

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteDistillery(distilleryId))
        history.push("/distilleries")
    }



    let drinkCards;
    if (drinks && distillery) {
        drinkCards = Object.values(drinks).map((drink) => {
            if (distillery.drink_ids?.includes(drink.id)) {
                return <DrinkCard key={drink.id} drink={drink} />;
            }
            return null;
        });
    }
    return (
        <div>
            {currentUser.id === distillery.owner_id ? (
                <>
                    <div>
                        <button onClick={createDrinkModal}>Add a Drink</button>
                    </div>
                    <div>
                        <button onClick={handleDelete}>Delete Distillery</button>
                    </div>
                </>
            ) : null}
            <div className={styles.singleDistillContainer}>
                <div>
                    <img src={distillery.logo} alt="Distillery Logo" />
                </div>
                <h1>{distillery.name}</h1>
                <div>{distillery.street}</div>
                <div>{distillery.city}</div>
                <div>{distillery.state}</div>
                <div>{distillery.drink_ids}</div>
            </div>

            <div className={styles.feedContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        {selection ? (
                            <button
                                className={styles.button}
                                onClick={() => setSelection(!selection)}>
                                Checkins
                            </button>
                        ) : (
                            <button
                                className={styles.button}
                                onClick={() => setSelection(!selection)}>
                                Drinks
                            </button>
                        )}
                    </div>
                </div>
                <div className={styles.feed}>
                    {selection ? (
                        <div className={styles.card}>{checkinCards}</div>
                    ) : (
                        <div className={styles.card}>{drinkCards}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleDistillery;
