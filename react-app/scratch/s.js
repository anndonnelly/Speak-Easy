// import { createContext, useContext, useState } from "react";

// const SessionContext = createContext();

// export const useSession = () => useContext(SessionContext);

// const SessionContextProvider = ({ children }) => {
//     const [userSession, setUserSession] = useState({
//         userSession: localStorage.getItem("userSession")
//             ? localStorage.getItem("userSession")
//             : userSession,
//     });
//     const [distillerySession, setDistillerySession] = useState({
//         distillerySession: localStorage.getItem("distillerySession")
//             ? localStorage.getItem("distillerySession")
//             : distillerySession,
//     });

//     return (
//         <SessionContext.Provider value={{ session, setSession }}>
//             {children}
//         </SessionContext.Provider>
//     );
// };
// export default SessionContextProvider;
