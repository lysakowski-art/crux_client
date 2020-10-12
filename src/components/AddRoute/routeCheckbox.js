import React from "react";
import { Form, Col } from "react-bootstrap";

const RouteCheckbox = ({ name, value, routeTypes, setValue, type }) => {
  const handleCheck = (e) => {
    setValue(!value);
  };
  return (
    <Col md={3}>
        <br/>
        <Form.Check label="Sportowa" type="checkbox" onChange={handleCheck} />
    </Col>
  );
};

export default RouteCheckbox;
