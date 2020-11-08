import React, {useState, createContext} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [lang, setLang] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("");
return (
    <GlobalContext.Provider value={{lang, setLang,loggedIn,setLoggedIn,userName,setUserName}}>
        {props.children}
    </GlobalContext.Provider>
    )
}
