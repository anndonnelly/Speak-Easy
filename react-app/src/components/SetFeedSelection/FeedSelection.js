import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadOneDistillery } from "../../store/distillery";
import { getCheckinsThunk } from "../../store/checkins";
import { loadAllDrinks } from "../../store/drinks";

import CheckinCard from "../CheckinCard/CheckinCard";
import DrinkCard from "../Distilleries/DrinkCard";

import styles from "./FeedSelection.module.css";

export default function FeedSelection({ distilleryId }) {
    const dispatch = useDispatch();

    const distillery = useSelector((state) => state.distillery);
    const checkins = useSelector((state) => state.checkins);
    const drinks = useSelector((state) => state.drinks);

    const [selection, setSelection] = useState({
        drinks: true,
        checkins: false,
    });

    useEffect(() => {
        setSelection(JSON.parse(window.localStorage.getItem("selection")));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("selection", JSON.stringify(selection));
    }, [selection]);

    useEffect(() => {
        dispatch(loadOneDistillery(distilleryId));
        dispatch(getCheckinsThunk());
        dispatch(loadAllDrinks());
    }, [dispatch, distilleryId]);

    const setDrinksSelection = () => {
        setSelection({ drinks: true, checkins: false });
    };

    const setCheckinsSelection = () => {
        setSelection({ drinks: false, checkins: true });
    };

    let checkinCards;
    if (checkins) {
        checkinCards = Object.values(checkins)
            .map((checkin) => {
                if (distillery.checkin_ids?.includes(checkin.id)) {
                    return <CheckinCard key={checkin.id} checkin={checkin} />;
                }
                return null;
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

    if (!drinks && !checkins) {
        return null;
    }

    return (
        <div className={styles.feedContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    {selection.drinks ? (
                        <button
                            className={styles.button}
                            onClick={setCheckinsSelection}>
                            View Checkins
                        </button>
                    ) : selection.checkins ? (
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
            <div className={styles.feed}>
                {selection.checkins ? (
                    <div className={styles.card}>{checkinCards}</div>
                ) : selection.drinks ? (
                    <div className={styles.card}>{drinkCards}</div>
                ) : (
                    <div className={styles.card}>{checkinCards}</div>
                )}
            </div>
        </div>
    );
}
