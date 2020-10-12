import React from "react";
import { Form, Col } from "react-bootstrap";
import RouteCheckbox from "./routeCheckbox";

const AddRouteInput = ({
  name,
  value,
  setValue,
  type,
  rows,
  checkbox = false,
  checkboxValue,
  setCheckboxValue,
  as
}) => {
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form.Row>
      <Col md={type === "number" ? 9 : 12}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>{name}</Form.Label>
          <Form.Control
            type={type}
            placeholder={name}
            onChange={handleValue}
            rows={rows}
            as={as}
          />
        </Form.Group>
      </Col>
      {checkbox ? (
            <RouteCheckbox value={checkboxValue} setValue={setCheckboxValue} />
          ) : null}
    </Form.Row>
  );
};

export default AddRouteInput;
