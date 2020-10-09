import React from "react";
import {Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <Row style={{
      "backgroundColor": "#343a40"
    }}>
      <Col xs lg={8}>
        Footer
      </Col>
      <Col xs lg={4}>
        facebook i coś tam jeszcze
      </Col>
    </Row>
  );
};

export default Footer;
