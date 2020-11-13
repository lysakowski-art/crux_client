import React from "react";
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <Row style={{
      "backgroundColor": "#343a40",
      "height": "30px",
      "width": "100%",
      "margin": "0"
    }}>
      <Col xs lg={11} style={{color: "#ffffff80"}}>
        Copyright Michał Łysakowski | License MIT
      </Col>
      <Col xs lg={1}>
        <a href="https://www.facebook.com/michalysakowski" target="blank" style={{width: "2em", display: "inline-block"}}>
          <FontAwesomeIcon style={{color: "#ffffff50"}} icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/michal-lysakowski-front-end/" target="blank" style={{width: "2em", display: "inline-block"}}>
          <FontAwesomeIcon style={{color: "#ffffff50"}} icon={faLinkedin} />
        </a>
        <a href="https://github.com/lysakowski-art" target="blank" style={{width: "2em", display: "inline-block"}}>
          <FontAwesomeIcon style={{color: "#ffffff50"}} icon={faGithub} />
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
