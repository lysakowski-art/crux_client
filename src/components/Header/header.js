import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = ({lang,setLang}) => {
  const handleClick= (e) => {
    e.preventDefault() 
    setLang(!lang)
  }

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Crux of Poland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add_route">Add Route</Nav.Link>
            <Nav.Link href="/routes">Routes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={handleClick}>{lang ? "EN" : "PL"}</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
