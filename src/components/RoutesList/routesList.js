import React from "react";
import { ListGroup } from "react-bootstrap";
import RouteElement from "./RouteElement";
const RoutesList = ({ routes }) => {
  return (
    <ListGroup variant="dark">
      {routes.length !== 0 ? <div style={{ height: "2em" }} /> : null}
      {routes.map((el, index) => (
        <RouteElement key={index} el={el} />
      ))}
      {routes.length !== 0 ? <div style={{ height: "2em" }} /> : null}
    </ListGroup>
  );
};

export default RoutesList;
