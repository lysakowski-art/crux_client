import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LogoutPanel from "../LogoutPanel";
import { GlobalContext } from "../Context/globalProvider";
import "./_headers.scss";

const Header = () => {
  const { lang, setLang, loggedIn } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
    setLang(!lang);
  };
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">Crux of Poland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/add_route">
              {t("add_route")}
            </Nav.Link>
            <Nav.Link as={Link} to="/routes">
              {t("routes")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              {t("about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/sign" className="login-register">
              {t("login")} / {t("register")}
            </Nav.Link>
          </Nav>
          {loggedIn ? (
            <LogoutPanel endpoint="auth" content={t("logout")} />
          ) : null}
          <Button variant="secondary" onClick={changeLanguage}>
            {t("lng").toUpperCase()}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
