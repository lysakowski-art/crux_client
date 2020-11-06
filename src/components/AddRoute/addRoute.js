import React, {useState, useEffect, useContext} from "react";
import {Form,Row} from 'react-bootstrap'
import AddRouteInput from "./addRouteInput"
import AddRouteRange from './addRouteRange';
import AddRegion from './addRegion';
import SubmitForm from './submitForm'
import NotLoggedIn from "./notLoggedIn"
import {GlobalContext} from "../Context/globalProvider"

const AddRoute = () => {
  const {loggedIn, userName} =useContext(GlobalContext)
  const [data, setData] = useState({})
  const [routeTitle, setRouteTitle] = useState("");
  const [routeAuthor,setRouteAuthor] = useState("");
  const [routeRank,setRouteRank] = useState(0);
  const [routeType, setRouteType] = useState(true);
  const [region, setRegion] = useState("");
  const [placemantAndBelayAnchor, setPlacemantAndBelayAnchor] = useState(1);
  const [routeDescription, setRouteDescription] = useState("");
  
  useEffect(()=>{
    setData({
      'route_title': routeTitle,
      'route_author': routeAuthor,
      'route_rank': routeRank,
      'route_type': routeType,
      'region': region,
      'placemant_and_belay_anchor': placemantAndBelayAnchor,
      'route_description': routeDescription,
      'user_name': userName,
    })
  },[routeTitle,routeAuthor,routeRank,routeType,region,placemantAndBelayAnchor,routeDescription])

  return loggedIn ? (
    <Row className="add_route justify-content-md-center">
      <Form>
        <AddRouteInput name="title" type="text" value={routeTitle} setValue={setRouteTitle}/>
        <AddRouteInput name="author" type="text" value={routeAuthor} setValue={setRouteAuthor}/>
        <AddRouteRange name="route's_rank" subName="route's_scale" type="select" value={routeRank} setValue={setRouteRank} max={33} min={1}/>
        <AddRegion name="region" as="select" value={region} setValue={setRegion}/>
        <AddRouteInput name="expansion_bolts/placemant" type="number" value={placemantAndBelayAnchor} setValue={setPlacemantAndBelayAnchor} checkbox={true} checkboxValue={routeType} setCheckboxValue={setRouteType}/>
        <AddRouteInput name="route_description" as="textarea" value={routeDescription} setValue={setRouteDescription} rows={4}/>
        <SubmitForm name="submit" type="submit" data={data} variant="dark"/>
      </Form>
    </Row>
  ) : <NotLoggedIn/>
};

export default AddRoute;
