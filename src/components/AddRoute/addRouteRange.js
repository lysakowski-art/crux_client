import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import scales from "../_common/scales";
import { useTranslation } from "react-i18next";

const AddRouteRange = ({ name, subName, value, setValue, type, max, min }) => {
  const { t } = useTranslation();
  //states
  const [scaleName, setScaleName] = useState("french");
  // options
  const scalesOptions = Object.keys(scales.scale).map((el, index) => (
    <option key={index} value={el}>
      {el.toUpperCase()}
    </option>
  ));
  const rankOptions = scales.scale[scaleName].map((el, index) =>
    el !== null ? (
      <option key={index} value={index}>
        {el}
      </option>
    ) : null
  );

  //handle
  const handleNameSelect = (e) => {
    setScaleName(e.target.value);
  };
  const handleRange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <Form.Row>
      <Col md={6}>
        <Form.Label>{t(subName)}</Form.Label>
        <Form.Control as="select" onChange={handleNameSelect}>
          {scalesOptions}
        </Form.Control>
      </Col>
      <Col md={6}>
        <Form.Label>{t(name)}</Form.Label>
        <Form.Control as={type} value={value} onChange={handleRange}>
          {rankOptions}
        </Form.Control>
      </Col>
    </Form.Row>
  );
};

export default AddRouteRange;
