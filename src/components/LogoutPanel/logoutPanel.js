import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { GlobalContext } from "../Context/globalProvider";

const LogoutPanel = ({ endpoint, content }) => {
  const { userName, setLoggedIn, loggedIn } = useContext(GlobalContext);
  const { t } = useTranslation();
  const url = process.env.REACT_APP_BACKEND_URL + endpoint;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(!loggedIn);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Row className="login_panel" md>
      <Col className="greetings">
        {t("greeting")} {userName}!
      </Col>
      <Col>
        <Button variant="danger" onClick={handleSubmit}>
          {content}
        </Button>
      </Col>
    </Row>
  );
};

export default LogoutPanel;
