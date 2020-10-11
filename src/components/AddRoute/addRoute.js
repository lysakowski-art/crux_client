import React, {useState, useEffect} from "react";
import {Form,Row} from 'react-bootstrap'
import AddRouteInput from "./addRouteInput"
import AddRouteRange from './addRouteRange';
import AddRegion from './addRegion';
import AddRouteRadio from './addRouteRadio'

const AddRoute = () => {
  const [data, setData] = useState({})
  // data
  const [routeTitle, setRouteTitle] = useState("");
  const [routeAuthor,setRouteAuthor] = useState("");
  const [routeRank,setRouteRank] = useState("");
  const [routeType, setRouteType] = useState(true);
  const [region, setRegion] = useState("");
  // const [route_img] = useState("");
  const [placemantAndBelayAnchor, setPlacemantAndBelayAnchor] = useState(1);
  const [routeDescription, setRouteDescription] = useState("");
  // const [added_by] = useState("");
  // const [location, setLocation] = useState("");
  
  const routeTypes=["Sportowa", "Trad"]
  
  useEffect(()=>{
    setData({
      'route_title': routeTitle,
      'route_author': routeAuthor,
      'route_rank': routeRank,
      'route_type': routeType,
      'region': region,
      // 'route_img': routeImg,
      'placemant_and_belay_anchor': placemantAndBelayAnchor,
      'route_description': routeDescription,
      // 'added_by': addedBy,
      // 'location': location
    })
  },[routeTitle,routeAuthor,routeRank,routeType,region,placemantAndBelayAnchor,routeDescription])

  console.log(data)
  return(
    <Row className="add_route justify-content-md-center">
      <Form>
        <AddRouteInput name="Title" type="text" value={routeTitle} setValue={setRouteTitle}/>
        <AddRouteInput name="Author" type="text" value={routeAuthor} setValue={setRouteAuthor}/>
        <AddRouteRadio name="Type" type="checkbox" routeTypes={routeTypes} value={routeType} setValue={setRouteType}/>
        <AddRouteRange name="Route's Rank" type="select" value={routeRank} setValue={setRouteRank} max={33} min={1}/>
        <AddRegion name="Region" type="text" value={region} setValue={setRegion}/>
        <AddRouteInput name="Placemant" type="number" value={placemantAndBelayAnchor} setValue={setPlacemantAndBelayAnchor}/>
        <AddRouteInput name="Route Description" type="textarea" value={routeDescription} setValue={setRouteDescription} rows={3}/>
      </Form>
    </Row>
  ) 
};

export default AddRoute;
