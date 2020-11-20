import React, {useState, createContext} from "react";

export const RouteContext = createContext();

export const RouteProvider = (props) => {
    const{_id, routeTitle, userName,routeAuthor,routeRank,routeType,bolts,routeDescription} = props.el
    // do powyższego jeszcz  active, userId, region
    const [id, setId] = useState(_id);
    const [rTitle, setRTitle] = useState(routeTitle)
    const [uName, setUName] = useState(userName);
    const [rAuthor, setRAuthor] = useState(routeAuthor)
    const [rRank, setRRank] =useState(routeRank)
    const [boltsDigit, setBoltsDigit] = useState(bolts)
    const [rDescription, setRDescription] = useState(routeDescription)
    const [rType, setRType] = useState(routeType)
    // const [userId, setUserId] = useState(userId)
    // const [active, setActive] = useState(active)
return (
    <RouteContext.Provider
    value={{id,
            setId,
            rTitle,
            setRTitle,
            uName,
            setUName,
            rAuthor,
            setRAuthor,
            rRank,
            setRRank,
            boltsDigit,
            setBoltsDigit,
            rDescription,
            setRDescription,
            rType,
            setRType
            }}>
        {props.children}
    </RouteContext.Provider>
    )
}
