import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/Modal";
import { BrowserRouter } from "react-router-dom";
import * as drinksActions from "./store/drinks";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.drinksActions = drinksActions;
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ModalProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ModalProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
