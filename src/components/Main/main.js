import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "../Home";
import AddRoute from "../AddRoute";
import Routes from "../RoutesList";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add_route" component={AddRoute} />
        <Route exact path="/routes" component={Routes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
