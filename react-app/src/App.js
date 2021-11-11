import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { authenticateDistillery } from "./store/distillery_session";
import { Footer } from "./components/Footer";
import SplashPage from "./components/SplashPage";
import CheckinsFeed from "./components/CheckinFeed";
import Modal from "./components/CheckinModal";
import Distilleries from "./components/Distilleries";
import SingleDistillery from "./components/Distilleries/SingleDistillery";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const distilleryUser = useSelector((state) => state.distilleriesSession.distilleries)

    useEffect(() => {
        (async () => {
            if(!distilleryUser){
                await dispatch(authenticateDistillery());
            } else if (!sessionUser){
               await dispatch(authenticate());
            }
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <>
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
                    <User />
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
        </>
    );
}

export default App;
