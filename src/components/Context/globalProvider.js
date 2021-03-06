import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [lang, setLang] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        userType,
        setUserType,
        lang,
        setLang,
        loggedIn,
        setLoggedIn,
        userName,
        setUserName,
        userId,
        setUserId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
