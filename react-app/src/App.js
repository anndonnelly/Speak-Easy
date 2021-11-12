import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { setModalMount } from "./store/modal";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import { authenticate } from "./store/session";
import { Footer } from "./components/Footer";
import SplashPage from "./components/SplashPage";
import CheckinsFeed from "./components/CheckinFeed";
import Modal from "./components/CheckinModal";
import Distilleries from "./components/Distilleries";
import SingleDistillery from "./components/Distilleries/SingleDistillery";
import ProfilePage from "./components/Profile/ProfilePage";

// import User from "./components/User";
// import CreateDrink from "./components/CreateDrink";

function App() {
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);

    const sessionUser = useSelector((state) => state.session.user);

    const modalMooringRef = useRef(null);

    useEffect(() => {
        dispatch(setModalMount(modalMooringRef.current));
    }, [dispatch]);

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <div>
            <NavBar sessionUser={sessionUser} />
            <Modal />
            <Switch>
                <Route path="/login" exact={true}>
                    <SplashPage />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SplashPage />
                </Route>
                <ProtectedRoute path="/users" exact={true}>
                    <UsersList />
                </ProtectedRoute>
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
            <Footer />
            <div ref={modalMooringRef} className="modal"></div>
        </div>
    );
}

export default App;
