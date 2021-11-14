import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import SplashPage from "./components/SplashPage";
import CheckinsFeed from "./components/CheckinFeed";
import Modal from "./components/CheckinModal";
import Distilleries from "./components/Distilleries";
import SingleDistillery from "./components/Distilleries/SingleDistillery";
import ProfilePage from "./components/Profile/ProfilePage";
import styles from "./App.module.css";

export default function App() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);
    const sessionLoaded = useSelector((state) => state.session.loaded);

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
                {user && sessionLoaded ? (
                    <ProtectedRoute path="/" exact={true}>
                        <CheckinsFeed />
                    </ProtectedRoute>
                ) : (
                    <SplashPage />
                )}
                <ProtectedRoute path="/users/:userId" exact={true}>
                    <ProfilePage />
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
