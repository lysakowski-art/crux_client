import React, {useState, createContext} from "react";

export const RouteContext = createContext();

export const RouteProvider = (props) => {
    const{_id, route_title, user_name,route_author,route_rank,route_type,region,placemant_and_belay_anchor,route_description, active, user_id} = props.el
    
    const [id, setId] = useState(_id);
    const [routeTitle, setRouteTitle] = useState(route_title)
    // const [userName, setUserName] = useState(user_name);
    const [routeAuthor, setRouteAuthor] = useState(route_author)
    // const [routeRank, setRouteRank] =useState(route_rank)
    // const [bolts, setBolts] = useState(placemant_and_belay_anchor)
    // const [routeDescription, setRouteDescription] = useState(routeDescription)
    // const [userId, setUserId] = useState(user_id)
    // const [active, setActive] = useState(active)
return (
    <RouteContext.Provider value={{id, setId, routeTitle, setRouteTitle,routeAuthor, setRouteAuthor}}>
        {props.children}
    </RouteContext.Provider>
    )
}
