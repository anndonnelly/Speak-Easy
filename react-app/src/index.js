import React from "react";
// import React, { useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/Modal";
import { BrowserRouter } from "react-router-dom";
import * as drinksActions from "./store/drinks";
import * as distilleryActions from "./store/distilleries";
// import { setModalMount } from "./store/modal";
// import { useDispatch } from "react-redux";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.drinksActions = drinksActions;
    window.distilleryActions = distilleryActions;
}
function Root() {
    return (
        <Provider store={store}>
            <ModalProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ModalProvider>
        </Provider>
    );
}
// const Root = () => {
//     const dispatch = useDispatch();
//     const modalMooringRef = useRef(null);

//     useEffect(() => {
//         dispatch(setModalMount(modalMooringRef.current));
//     }, [dispatch]);
//     return (
//         <>
//             <App />
//             <div ref={modalMooringRef} className="modal"></div>
//         </>
//     );
// };

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById("root")
);
