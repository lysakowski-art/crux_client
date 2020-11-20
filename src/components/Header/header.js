import React,{useContext} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {useTranslation} from "react-i18next";
import LogoutPanel from "../LogoutPanel";
import {GlobalContext} from "../Context/globalProvider"
import "./_headers.scss"

const Header = ({setLoggedIn, userName, setUserName, setLoading}) => {
  const {lang, setLang, loggedIn} = useContext(GlobalContext)
  const {i18n,t} = useTranslation();

  const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
        setLang(!lang)
    };

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Crux of Poland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/add_route">{t("add_route")}</Nav.Link>
            <Nav.Link href="/routes">{t("routes")}</Nav.Link>
            <Nav.Link href="/about">{t("about")}</Nav.Link>
            <Nav.Link href="/contact">{t("contact")}</Nav.Link>
            <Nav.Link href="/sign" className="login-register">{t("login")} / {t("register")}</Nav.Link>
          </Nav>
          {loggedIn ? <LogoutPanel endpoint="auth" content={t("logout")}/> : null}
          <Button variant="secondary" onClick={changeLanguage}>{t("lng").toUpperCase()}</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
