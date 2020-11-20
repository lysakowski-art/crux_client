import React,{useContext} from 'react';
import {Card} from "react-bootstrap"
import {GlobalContext} from "../../Context/globalProvider"
import {RouteContext} from "./routeContext"
import DeleteRoute from "../deleteRoute"
import RouteTextOutput from "./routeTextOutput"

const RouteHeader = ({_id, setRouteActive}) => {
    const{userType} = useContext(GlobalContext)
    const {rTitle, setRTitle, id} = useContext(RouteContext)
    return ( 
        <Card.Header>
              <strong>
                <RouteTextOutput
                param="route_title"
                id={id}
                value={rTitle}
                setValue={setRTitle}
                name={null}
                />  
              </strong>
              {userType === "admin" || userType === "moderator" ? (
                <DeleteRoute _id={_id} setRouteActive={setRouteActive}/>
              ) : (
                null
              )}  
        </Card.Header>
     );
}
 
export default RouteHeader;