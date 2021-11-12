import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneUser } from "../../store/users";
import DistilleryCard from "../Distilleries/DistilleryCard";
import CheckinCard from "../CheckinCard/CheckinCard";
import { getCheckinsThunk } from "../../store/checkins";
import styles from "./ProfilePage.module.css"

// import { useParams } from "react-router-dom";

import { loadDistilleries } from "../../store/distilleries";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const checkins = useSelector((state) => state.checkins);
    const distillery = useSelector((state) => state.distilleries);
    const distilleries = useSelector((state) => state.distilleries);
    const ownedDistilleries = useSelector((state) => state.users.distilleries);
    const userCheckins = useSelector(state => state.users.checkin_ids)
    console.log("/////////////", userCheckins)
    const [selection, setSelection] = useState(false);


    useEffect(() => {
        dispatch(loadOneUser(user.id));
        dispatch(getCheckinsThunk());
        dispatch(loadDistilleries());
    }, [dispatch, user.id]);

    let distilleryCards;
    if (ownedDistilleries) {
        distilleryCards = Object.values(distilleries).map((distillery) => {
            if (ownedDistilleries.includes(distillery.id)) {
                return (
                    <DistilleryCard
                        key={distillery.id}
                        distillery={distillery}
                    />
                );
            }
            return null;
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
        <>
            <div>
                {/* <button onClick={}>Start A Distillery</button> */}
            </div>
            <h1>{user.username}</h1>
            <div className={styles.feedToggle}>
                {selection ? (
                    <button
                        className={styles.button}
                        onClick={() => setSelection(!selection)}>
                        Drinks
                    </button>
                ) : (
                    <button
                        className={styles.button}
                        onClick={() => setSelection(!selection)}>
                        Checkins
                    </button>
                )}
            </div>
            <div className={styles.feedContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        {selection ? <div>Checkins</div> : <div>Drinks</div>}
                    </div>
                </div>
                <div className={styles.feed}>
                    {selection ? (
                        <div className={styles.card}>{checkinCards}</div>
                    ) : (
                        <div className={styles.card}>{distilleryCards}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
