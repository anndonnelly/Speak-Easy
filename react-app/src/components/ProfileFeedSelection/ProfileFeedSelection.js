import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadOneUser } from "../../store/users";
import { loadDistilleries } from "../../store/distilleries";
import { getCheckinsThunk } from "../../store/checkins";

import DistilleryCard from "../Distilleries/DistilleryCard";
import CheckinCard from "../CheckinCard/CheckinCard";

import styles from "./ProfileFeedSelection.module.css";

export default function ProfileFeedSelection() {
    const dispatch = useDispatch();

    const [userSelection, setUserSelection] = useState({
        distilleries: false,
        checkins: true,
    });

    const user = useSelector((state) => state.session.user);
    const distillery = useSelector((state) => state.distilleries);
    const checkins = useSelector((state) => state.checkins);
    const distilleries = useSelector((state) => state.distilleries);

    const ownedDistilleries = useSelector((state) => state.users.distilleries);
    const userCheckins = useSelector((state) => state.users.checkin_ids);

    useEffect(() => {
        dispatch(loadOneUser(user.id));
        dispatch(getCheckinsThunk());
        dispatch(loadDistilleries());
    }, [dispatch, user.id]);

    useEffect(() => {
        setUserSelection(
            JSON.parse(window.localStorage.getItem("userSelection"))
        );
    }, []);

    useEffect(() => {
        window.localStorage.setItem(
            "userSelection",
            JSON.stringify(userSelection)
        );
    }, [userSelection]);

    const setDistilleriesSelection = () => {
        setUserSelection({ distilleries: true, checkins: false });
    };

    const setCheckinsSelection = () => {
        setUserSelection({ distilleries: false, checkins: true });
    };

    if (!distilleries && !checkins) {
        return null;
    }

    let distilleryCards;
    if (ownedDistilleries && distillery) {
        distilleryCards = Object.values(distilleries).map((distillery) => {
            if (ownedDistilleries?.includes(distillery?.id)) {
                return (
                    <DistilleryCard
                        key={distillery.id}
                        distillery={distillery}
                    />
                );
            }
            return distilleryCards;
        });
    }

    let checkinCards;
    if (checkins && distillery) {
        checkinCards = Object.values(checkins)
            .map((checkin) => {
                if (userCheckins?.includes(checkin.id)) {
                    return <CheckinCard key={checkin.id} checkin={checkin} />;
                }
                return null;
            })

            .reverse();
    }

    return (
        <div className={styles.feedContainer}>
            <div className={styles.buttonContainer}>
                <div className={styles.btnWrapper}>
                    {userSelection && userSelection.distilleries ? (
                        <button
                            className={styles.button}
                            onClick={setCheckinsSelection}>
                            View Checkins
                        </button>
                    ) : userSelection && userSelection.checkins ? (
                        <button
                            className={styles.button}
                            onClick={setDistilleriesSelection}>
                            View Distilleries
                        </button>
                    ) : (
                        <button
                            className={styles.button}
                            onClick={setCheckinsSelection}>
                            View Distilleries
                        </button>
                    )}
                </div>
            </div>
            {userSelection && userSelection.distilleries ? (
                <div className={styles.feedTitle}>Distilleries</div>
            ) : (
                <div className={styles.feedTitle}>Checkins</div>
            )}
            <div className={styles.feed}>
                {userSelection && userSelection.checkins ? (
                    <div className={styles.card}>{checkinCards}</div>
                ) : userSelection && userSelection.distilleries ? (
                    <div className={styles.card}>{distilleryCards}</div>
                ) : (
                    <div className={styles.card}>{checkinCards}</div>
                )}
            </div>
        </div>
    );
}
