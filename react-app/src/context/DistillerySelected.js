import { createContext, useContext, useState } from "react";

export const DistillerySelectedContext = createContext();

export const DistillerySelectedProvider = ({ children }) => {

    const [distillery, setDistillery] = useState(false);
 
    return (
    <DistillerySelectedContext.Provider
      value={{
        distillery,
        setDistillery,
      }}
    >
      {children}
    </DistillerySelectedContext.Provider>
  );
};

export const useDistillerySelected = () => useContext(DistillerySelectedContext);
