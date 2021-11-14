import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadOneDistillery } from "../../store/distillery";
import { getCheckinsThunk } from "../../store/checkins";
import { loadAllDrinks } from "../../store/drinks";

import CheckinCard from "../CheckinCard/CheckinCard";
import DrinkCard from "../Distilleries/DrinkCard";

import styles from "./DistilleryFeedSelection.module.css";

export default function DistilleryFeedSelection() {
    const dispatch = useDispatch();
    const { distilleryId } = useParams();

    const distillery = useSelector((state) => state.distillery);
    const checkins = useSelector((state) => state.checkins);
    const drinks = useSelector((state) => state.drinks);

    const [distillerySelection, setDistillerySelection] = useState({
        drinks: true,
        checkins: false,
    });

    useEffect(() => {
        setDistillerySelection(
            JSON.parse(window.localStorage.getItem("distillerySelection"))
        );
    }, []);

    useEffect(() => {
        window.localStorage.setItem(
            "distillerySelection",
            JSON.stringify(distillerySelection)
        );
    }, [distillerySelection]);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
        dispatch(loadAllDrinks());
    }, [dispatch, distilleryId]);

    const setDrinksSelection = () => {
        setDistillerySelection({ drinks: true, checkins: false });
    };

    const setCheckinsSelection = () => {
        setDistillerySelection({ drinks: false, checkins: true });
    };

    let checkinCards;
    if (checkins) {
        checkinCards = Object.values(checkins)
            .map((checkin) => {
                if (distillery.checkin_ids?.includes(checkin.id)) {
                    return <CheckinCard key={checkin.id} checkin={checkin} />;
                }
                return checkinCards;
            })
            .reverse();
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

    if (!drinks || !checkins) {
        return null;
    }

    return (
        <div className={styles.feedContainer}>
            <div className={styles.buttonContainer}>
                <div className={styles.btnWrapper}>
                    {distillerySelection && distillerySelection.drinks ? (
                        <button
                            className={styles.button}
                            onClick={setCheckinsSelection}>
                            View Checkins
                        </button>
                    ) : distillerySelection && distillerySelection.checkins ? (
                        <button
                            className={styles.button}
                            onClick={setDrinksSelection}>
                            View Drinks
                        </button>
                    ) : (
                        <button
                            className={styles.button}
                            onClick={setDrinksSelection}>
                            View Drinks
                        </button>
                    )}
                </div>
            </div>
            {distillerySelection && distillerySelection.drinks ? (
                <div className={styles.feedTitle}> Drinks </div>
            ) : (
                <div className={styles.feedTitle}> Checkins </div>
            )}
            <div className={styles.feed}>
                {distillerySelection && distillerySelection.checkins ? (
                    <div className={styles.card}>{checkinCards}</div>
                ) : distillerySelection && distillerySelection.drinks ? (
                    <div className={styles.card}>{drinkCards}</div>
                ) : (
                    <div className={styles.card}>{checkinCards}</div>
                )}
            </div>
        </div>
    );
}
