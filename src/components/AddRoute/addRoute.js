import React, { useState, useEffect, useContext } from "react";
import { Form, Row } from "react-bootstrap";
import AddRouteInput from "./addRouteInput";
import AddRouteRange from "./addRouteRange";
import AddRegion from "./addRegion";
import SubmitForm from "./submitForm";
import NotLoggedIn from "./notLoggedIn";
import { GlobalContext } from "../Context/globalProvider";
import "./_addRoutes.scss";
const AddRoute = () => {
  const { loggedIn, userName } = useContext(GlobalContext);
  const [data, setData] = useState({});
  const [routeTitle, setRouteTitle] = useState("");
  const [routeAuthor, setRouteAuthor] = useState("");
  const [routeRank, setRouteRank] = useState(0);
  const [routeType, setRouteType] = useState(true);
  const [region, setRegion] = useState("5f7afd3e4845fd5b1dfff1c7");
  const [bolts, setBolts] = useState(1);
  const [routeDescription, setRouteDescription] = useState("");

  useEffect(() => {
    setData({
      routeTitle,
      routeAuthor,
      routeRank,
      routeType,
      region,
      bolts,
      routeDescription,
      userName,
    });
  }, [
    routeTitle,
    routeAuthor,
    routeRank,
    routeType,
    region,
    bolts,
    routeDescription,
    userName,
  ]);

  return loggedIn ? (
    <Row className="add-route justify-content-md-center">
      <Form>
        <AddRouteInput
          name="title"
          type="text"
          value={routeTitle}
          setValue={setRouteTitle}
        />
        <AddRouteInput
          name="author"
          type="text"
          value={routeAuthor}
          setValue={setRouteAuthor}
        />
        <AddRouteRange
          name="route's_rank"
          subName="route's_scale"
          type="select"
          value={routeRank}
          setValue={setRouteRank}
          max={33}
          min={1}
        />
        <AddRegion
          name="region"
          as="select"
          value={region}
          setValue={setRegion}
        />
        <AddRouteInput
          name="expansion_bolts/placemant"
          type="number"
          value={bolts}
          setValue={setBolts}
          checkbox={true}
          checkboxValue={routeType}
          setCheckboxValue={setRouteType}
        />
        <AddRouteInput
          name="route_description"
          as="textarea"
          value={routeDescription}
          setValue={setRouteDescription}
          rows={4}
        />
        <SubmitForm name="submit" type="submit" data={data} variant="dark" />
      </Form>
    </Row>
  ) : (
    <NotLoggedIn />
  );
};

export default AddRoute;
