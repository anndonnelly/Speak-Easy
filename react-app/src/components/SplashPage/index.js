import React from "react";
import styles from "./SplashPage.module.css";
import Footer from "../Footer/index";

export default function SplashPage() {
    return (
        <>
            <div className={styles.splashPicContainer}>
                <img
                    className={styles.splashPic}
                    src="https://res.cloudinary.com/dis83syog/image/upload/v1636689739/SpeakEasy/nd9OHIj6_y7meju.jpg"
                    alt="Splash Page"
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.splashText}>
                    <h1 className={styles.splashTitle}>
                        <span className={styles.splashSpan}>Speakeasy</span>{" "}
                        Booze For All The{" "}
                        Working Stiffs
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    );
}
