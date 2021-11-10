import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneDistillery } from "../../store/distilleries";
import { getCheckinsThunk } from "../../store/checkins";
import { loadAllDrinks } from "../../store/drinks";
import { useParams } from "react-router-dom";
import styles from "./SingleDistillery.module.css";
import CheckinCard from "../CheckinCard/CheckinCard";
import DrinkCard from "./DrinkCard";

const SingleDistillery = () => {
    const { distilleryId } = useParams();
    const dispatch = useDispatch();
    const [selection, setSelection] = useState(false);
    const distillery = useSelector((state) => state.distilleries);
    const checkins = useSelector((state) => state.checkins);
    const drinks = useSelector((state) => state.drinks);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
        dispatch(loadAllDrinks());
    }, [dispatch, distilleryId]);

    let checkinCards;
    if (checkins) {
        checkinCards = Object.values(checkins).map((checkin) => {
            if (distillery.checkin_ids?.includes(checkin.id)) {
                //includes showing undefined
                return <CheckinCard checkin={checkin} />;
            }
            return null;
        });
    }
    let drinkCards;
    if (drinks) {
        drinkCards = Object.values(drinks).map((drink) => {
            if (distillery.drink_ids?.includes(drink.id)) {
                return <DrinkCard drink={drink} />;
            }
            return null;
        });
    }

    return (
        <div>
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
                {selection ? (
                    <button onClick={() => setSelection(!selection)}>
                        Drinks
                    </button>
                ) : (
                    <button onClick={() => setSelection(!selection)}>
                        Checkins
                    </button>
                )}
            </div>
            {selection ? <div>{checkinCards}</div> : <div>{drinkCards}</div>}
        </div>
    );
};

export default SingleDistillery;
