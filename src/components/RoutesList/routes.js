import React, { useState } from "react";
import RoutesForm from "./routesForm";
import RoutesList from "./routesList";


const Routes = () => {
  // states
  const [region, setRegion] = useState("random");
  const [routeRank, setRouteRank] = useState(0);
  const [routes, setRoutes] = useState([])
  // URIs
  console.log(routes);

  return (
    <div className="routes_cnt">
      <RoutesForm
        region={region}
        routeRank={routeRank}
        routes={routes}
        setRegion={setRegion}
        setRouteRank={setRouteRank}
        setRoutes={setRoutes}
      />
      <RoutesList routes={routes}/>  
    </div>
  );
};

export default Routes;
