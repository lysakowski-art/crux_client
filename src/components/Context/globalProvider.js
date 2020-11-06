import React, {useState, createContext} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [loading, setLoading] = useState(true)
    const [lang, setLang] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("");
    const pieluchyDlaJaczki = "jebać pis"
return (
    <GlobalContext.Provider value={{pieluchyDlaJaczki,loading, setLoading,lang, setLang,loggedIn,setLoggedIn,userName,setUserName}}>
        {props.children}
    </GlobalContext.Provider>
    )
}
