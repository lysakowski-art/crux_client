import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
// components
import Home from "../Home";
import AddRoute from "../AddRoute";
import Routes from "../RoutesList";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Sign from "../Sign";
const Main = () => {
  return (
    <Container className="container main" fluid>
      <Row className="main-row">
        <Switch>
          <Route exact path="/" component={() => <Home/>} />
          <Route
            exact
            path="/add_route"
            component={() => <AddRoute/>}
          />
          <Route
            exact
            path="/routes"
            component={() => <Routes/>}
          />
          <Route
            exact
            path="/about"
            component={() => <About/>}
          />
          <Route
            exact
            path="/contact"
            component={() => <Contact/>}
          />
          <Route
            exact
            path="/sign"
            component={() => <Sign/>}
          />
          <Route component={() => <NotFound/>} />
        </Switch>
      </Row>
    </Container>
  );
};

export default Main;