import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
// import { Footer } from "./components/Footer";
import SplashPage from "./components/SplashPage";
import CheckinsFeed from "./components/CheckinFeed";
import Modal from "./components/CheckinModal";
import Distilleries from "./components/Distilleries";
import SingleDistillery from "./components/Distilleries/SingleDistillery";
import ProfilePage from "./components/Profile/ProfilePage";

import styles from "./App.module.css";
// import User from "./components/User";
// import CreateDrink from "./components/CreateDrink";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authenticate());
    }, [dispatch]);

    return (
        <div className={styles.appWrapper}>
            <NavBar />
            <Modal />
            <Switch>
                <Route path="/login" exact={true}>
                    <SplashPage />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SplashPage />
                </Route>
                <ProtectedRoute path="/users/:userId" exact={true}>
                    <ProfilePage />
                </ProtectedRoute>
                <ProtectedRoute path="/" exact={true}>
                    <CheckinsFeed />
                </ProtectedRoute>
                <ProtectedRoute exact path="/distilleries">
                    <Distilleries />
                </ProtectedRoute>
                <ProtectedRoute path="/distilleries/:distilleryId">
                    <SingleDistillery />
                </ProtectedRoute>
            </Switch>
        </div>
    );
}
