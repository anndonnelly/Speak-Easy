import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import checkins from "./checkins";
import drinks from "./drinks";
import distilleries from "./distilleries";
import distillery from "./distillery";
import modal from "./modal";
import selectedDistillery from "./checkinmodal";
import selectedDrink from "./checkinmodal_pagetwo";
import users from "./users";

const rootReducer = combineReducers({
    session,
    modal,
    checkins,
    drinks,
    distilleries,
    distillery,
    selectedDistillery,
    selectedDrink,
    users,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
