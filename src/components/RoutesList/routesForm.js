import React from "react";
import { Form } from "react-bootstrap";
import AddRegion from "../AddRoute/addRegion";
import AddRouteRange from "../AddRoute/addRouteRange";

const RoutesForm = ({ setRouteRank, routeRank, setRegion, region }) => {
  return (
    <Form>
        <AddRouteRange name="Route's Rank" type="select" value={routeRank} setValue={setRouteRank} max={33} min={1}/>
        <AddRegion name="Region" as="select" value={region} setValue={setRegion}/>  
    </Form>
  );
};

export default RoutesForm;
