import React from "react";
import { Form, Col } from "react-bootstrap";
import {useTranslation} from 'react-i18next'


const RouteCheckbox = ({ name, value, routeTypes, setValue, type }) => {
  const {t} = useTranslation();

  const handleCheck = (e) => {
    setValue(!value);
  };
  return (
    <Col md={3}>
        <br/>
        <Form.Check label={t("sport")} type="checkbox" onChange={handleCheck} />
    </Col>
  );
};

export default RouteCheckbox;
