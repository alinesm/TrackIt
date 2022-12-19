import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [photo, setPhoto] = useState("");
  return (
    <AppContext.Provider value={{ token, setToken, photo, setPhoto }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
