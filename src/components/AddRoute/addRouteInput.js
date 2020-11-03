import React from "react";
import { Form, Col } from "react-bootstrap";
import RouteCheckbox from "./routeCheckbox";
import {useTranslation} from 'react-i18next'
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
  const {t}=useTranslation();

  return (
    <Form.Row>
      <Col md={type === "number" ? 9 : 12}>
        <Form.Group>
          <Form.Label>{t(name)}</Form.Label>
          <Form.Control
            type={type}
            placeholder={t(name)}
            onChange={handleValue}
            rows={rows}
            as={as}
            value={checkboxValue&&type==="number"? 1 : value}
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
