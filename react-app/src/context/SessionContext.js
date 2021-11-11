import { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

const SessionContextProvider = ({ children }) => {
    let distillerySession;
    let userSession;
    const [session, setSession] = useState({
        distillerySession: localStorage.getItem("distillerySession")
            ? JSON.parse(localStorage.getItem("distillerySession"))
            : distillerySession,
        userSession: localStorage.getItem("userSession")
            ? JSON.parse(localStorage.getItem("userSession"))
            : userSession,
    });

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};
export default SessionContextProvider;
