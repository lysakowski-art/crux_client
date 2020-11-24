import React, { useState } from "react";
import RoutesForm from "./routesForm";
import RoutesList from "./routesList";
import "./_routes.scss";
const Routes = () => {
  const [region, setRegion] = useState("random");
  const [routeRank, setRouteRank] = useState(0);
  const [routes, setRoutes] = useState([]);
  return (
    <div className="routes-cnt">
      <RoutesForm
        region={region}
        routeRank={routeRank}
        routes={routes}
        setRegion={setRegion}
        setRouteRank={setRouteRank}
        setRoutes={setRoutes}
      />
      <RoutesList routes={routes} />
    </div>
  );
};

export default Routes;
