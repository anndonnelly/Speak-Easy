import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./ProfileButton.module.css";

const ProfileButton = () => {
    const history = useHistory();

    const userId = useSelector((state) => state?.session?.user?.id);

    const profile = () => {
        history.push(`/users/${userId}`);
    };

    return (
        <div className={styles.navLink}>
            <button className={styles.navButton} onClick={profile}>
                My Profile
            </button>
        </div>
    );
};

export default ProfileButton;
