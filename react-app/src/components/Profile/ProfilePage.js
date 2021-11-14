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
            <div>
                <button onClick={createDistilleryModal}>
                    Start A Distillery
                </button>
            </div>
            <h1>{user.username}</h1>
            <ProfileFeedSelection />
            <InternalFooter />
        </main>
    );
};

export default ProfilePage;
