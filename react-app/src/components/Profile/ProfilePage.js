import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showModal, setCurrentModal } from "../../store/modal";
import { loadOneUser } from "../../store/users";
import { loadDistilleries } from "../../store/distilleries";
import { getCheckinsThunk } from "../../store/checkins";

import DistilleryCard from "../Distilleries/DistilleryCard";
import CheckinCard from "../CheckinCard/CheckinCard";
import CreateDistillery from "../CreateDistillery";
import styles from "./ProfilePage.module.css";
import InternalFooter from "../Footer/InternalFooter";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);
    const checkins = useSelector((state) => state.checkins);
    const distillery = useSelector((state) => state.distilleries);
    const distilleries = useSelector((state) => state.distilleries);
    const ownedDistilleries = useSelector((state) => state.users.distilleries);
    const userCheckins = useSelector((state) => state.users.checkin_ids);

    const [selection, setSelection] = useState(false);

    useEffect(() => {
        dispatch(loadOneUser(user.id));
        dispatch(getCheckinsThunk());
        dispatch(loadDistilleries());
    }, [dispatch, user.id]);

    const createDistilleryModal = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateDistillery));
        dispatch(showModal());
    };

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
        <main className={styles.profile}>
            <div>
                <button onClick={createDistilleryModal}>
                    Start A Distillery
                </button>
            </div>
            <h1>{user.username}</h1>
            <div className={styles.feedContainer}>
                <div className={styles.feedToggle}>
                    {selection ? (
                        <button
                            className={styles.button}
                            onClick={() => setSelection(!selection)}>
                            Distilleries
                        </button>
                    ) : (
                        <button
                            className={styles.button}
                            onClick={() => setSelection(!selection)}>
                            Checkins
                        </button>
                    )}
                </div>
                <div className={styles.feed}>
                    {selection ? (
                        <div className={styles.card}>{distilleryCards}</div>
                    ) : (
                        <div className={styles.card}>{checkinCards}</div>
                    )}
                </div>
            </div>
            <InternalFooter />
        </main>
    );
};

export default ProfilePage;
