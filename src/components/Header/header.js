import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Header = ({lang,setLang}) => {
  // const handleClick= (e) => {
  //   e.preventDefault() 
  //   setLang(!lang)
  // }
  const {i18n, t} = useTranslation();

  const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
    };
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Crux of Poland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add_route">{t("add_route")}</Nav.Link>
            <Nav.Link href="/routes">{t("routes")}</Nav.Link>
            <Nav.Link href="/about">{t("about")}</Nav.Link>
            <Nav.Link href="/contact">{t("contact")}</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={changeLanguage}>{t("lng").toUpperCase()}</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
