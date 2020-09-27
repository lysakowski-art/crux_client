import React, { useState, useEffect } from "react";
import RoutesForm from "./routesForm";
import RoutesList from "./routesList";

const Routes = () => {
  const [region, setRegion] = useState("random");
  const [routeRank, setRouteRank] = useState(0);

  const handleRegion = (callback) => {
    setRegion(callback)
  }
  const handleRouteRank = (callback) => {
    setRouteRank(callback)
  }
  
  return (
    <div className="routes_cnt">
      <RoutesForm
      handleRegion={handleRegion}
      handleRouteRank={handleRouteRank}
      region={region}
      routeRank={routeRank}
      />
      <RoutesList/>  
    </div>
  );
};

export default Routes;
