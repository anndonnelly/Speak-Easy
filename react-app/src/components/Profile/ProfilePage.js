import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal";
import CreateDistillery from "../CreateDistillery";
import styles from "./ProfilePage.module.css";
import InternalFooter from "../Footer/InternalFooter";
import ProfileFeedSelection from "../ProfileFeedSelection/ProfileFeedSelection";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);

    const createDistilleryModal = (e) => {
        e.preventDefault();
        dispatch(setCurrentModal(CreateDistillery));
        dispatch(showModal());
    };

    return (
        <main className={styles.profile}>
            <div className={styles.btnWrapper}>
                <button
                    className={styles.start}
                    onClick={createDistilleryModal}>
                    Start A Distillery
                </button>
            </div>
            <div className={styles.userName}>{user.username}</div>
            <ProfileFeedSelection />
            <InternalFooter />
        </main>
    );
};

export default ProfilePage;
