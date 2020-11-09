import React from "react";
import {Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <Row style={{
      "backgroundColor": "#343a40",
      "height": "30px",
      "width": "100%",
      "margin": "0"
    }}>
      <Col xs lg={8} style={{color: "#ffffff80"}}>
        Copyright Michał Łysakowski | License MIT
      </Col>
      <Col xs lg={4}>
        {/* facebook i coś tam jeszcze */}
      </Col>
    </Row>
  );
};

export default Footer;
