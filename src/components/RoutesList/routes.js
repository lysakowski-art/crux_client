import React, { useState, useEffect } from "react";
import RoutesForm from "./routesForm";
import RoutesList from "./routesList";
import axios from 'axios';

const Routes = () => {
  // states
  const [region, setRegion] = useState("random");
  const [routeRank, setRouteRank] = useState(0);
  const [routes, setRoutes] = useState([])
  // URIs
  const allRoutesUri = 'http://127.0.0.1:8000/routes/'
  const routesWithRanksUri =`http://127.0.0.1:8000/routes/${routeRank}/random`
  const routesWithRegionUri = `http://127.0.0.1:8000/routes/0/${region}`
  const routesWithAllConditionsUri =`http://127.0.0.1:8000/routes/${routeRank}/${region}`

  const getRouteWithConditions = (reg,routeR, uri) =>{
    axios
        .get(allRoutesUri)
        .then(res=>{
          setRoutes(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }
  console.log(routes)
  useEffect(() => {
    if(routes.length === 0 && region === "random" && routeRank === 0){
      getRouteWithConditions(null,null,allRoutesUri)
    } else if (region !== "random" && routeRank === 0){
      getRouteWithConditions(region,null,routesWithRegionUri)
      console.log(region)
    } else if (region === "random" && routeRank !== 0){
      getRouteWithConditions(null,routeRank,routesWithAllConditionsUri)
    } else {
      getRouteWithConditions(region,routeRank,allRoutesUri)
    }
  },[region, routeRank])

  return (
    <div className="routes_cnt">
      <RoutesForm
        region={region}
        routeRank={routeRank}
        setRegion={setRegion}
        setRouteRank={setRouteRank}
      />
      <RoutesList routes={routes}/>  
    </div>
  );
};

export default Routes;
