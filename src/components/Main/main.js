import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
// components
import Home from "../Home";
import AddRoute from "../AddRoute";
import Routes from "../RoutesList";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";

const Main = ({ lang }) => {
  return (
    <Container className="container main">
      <Row className="justify-content-md-center">
        <Col xs="1"/>
        <Col xs="10">
          <Switch>
            <Route exact path="/" component={() => <Home lang={lang} />} />
            <Route
              exact
              path="/add_route"
              component={() => <AddRoute lang={lang} />}
            />
            <Route
              exact
              path="/routes"
              component={() => <Routes lang={lang} />}
            />
            <Route
              exact
              path="/about"
              component={() => <About lang={lang} />}
            />
            <Route
              exact
              path="/contact"
              component={() => <Contact lang={lang} />}
            />
            <Route component={() => <NotFound lang={lang} />} />
          </Switch>
        </Col>
        <Col xs="1"/>
      </Row>
    </Container>
  );
};

export default Main;