import React from "react";
import { Form } from "react-bootstrap";
import AddRegion from "../AddRoute/addRegion";
import AddRouteRange from "../AddRoute/addRouteRange";
import SubmitConditions from "./submitConditions"

const RoutesForm = ({ setRouteRank, routeRank, setRegion, region, routes, setRoutes}) => {
  return (
    <Form>
        <AddRouteRange name="Route's Rank" type="select" value={routeRank} setValue={setRouteRank} max={33} min={1}/>
        <AddRegion name="Region" as="select" value={region} setValue={setRegion}/>
        <SubmitConditions name="Submit" variant="dark" routeRank={routeRank} region={region} setRoutes={setRoutes} routes={routes}/>  
    </Form>
  );
};

export default RoutesForm;
