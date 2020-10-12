import React from "react";
import { ListGroup } from "react-bootstrap";

const RoutesList = ({ routes }) => {
  return (
    
    <ListGroup variant="flush">
        {routes.map(el=><ListGroup.Item key={el._id}>{el.route_title}</ListGroup.Item>)}
    </ListGroup>
  );
};

export default RoutesList;
