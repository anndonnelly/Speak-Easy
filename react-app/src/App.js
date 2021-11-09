import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
// import AllCheckins from "./components/Checkins";
import { Footer } from "./components/Footer";
import SplashPage from "./components/SplashPage";
import LoginForm from "./components/auth/LoginForm";
import CreateCheckin from "./components/CreateCheckin";
import CheckinsFeed from "./components/CheckinFeed";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

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
        <>
            <NavBar />
            <Switch>
                {!sessionUser && (
                    <Route path="/login" exact={true}>
                        <SplashPage />
                    </Route>
                )}
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
                    <CreateCheckin />
                    <CheckinsFeed />
                </ProtectedRoute>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
