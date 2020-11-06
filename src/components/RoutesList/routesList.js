import React from "react";
import {ListGroup} from "react-bootstrap"
import RouteElement from "./routeElement"
const RoutesList = ({ routes }) => {
  return (
    
    <ListGroup variant="dark">
        {routes.map((el, index)=><RouteElement key={index} el={el}/>)}
    </ListGroup>
  );
};

export default RoutesList;
