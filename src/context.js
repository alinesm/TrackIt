import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  // const [photo, setPhoto] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [todayHabits, setTodayHabits] = useState([]);

  const done = todayHabits.filter((h) => h.done);
  let percentageDones;
  if (todayHabits === undefined || todayHabits.length === 0) {
    percentageDones = 0;
  } else {
    percentageDones = Math.round((done.length / todayHabits.length) * 100);
  }

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        userInfo,
        setUserInfo,
        // photo,
        // setPhoto,
        done,
        todayHabits,
        setTodayHabits,
        percentageDones,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
