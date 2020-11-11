import React,{useState, useContext} from 'react';
import {Card} from "react-bootstrap"
import {GlobalContext} from "../../Context/globalProvider"
import {RouteContext} from "./routeContext"
import DeleteRoute from "../deleteRoute"

const RouteHeader = ({route_title, _id, setRouteActive}) => {
    const{userType} = useContext(GlobalContext)
    const {routeTitle, setrouteTitle} = useContext(RouteContext)
    return ( 
        <Card.Header>
              <strong>{routeTitle}</strong>
              {userType === "admin" || userType === "moderator" ? <DeleteRoute _id={_id} setRouteActive={setRouteActive}/> : null}  
        </Card.Header>
     );
}
 
export default RouteHeader;