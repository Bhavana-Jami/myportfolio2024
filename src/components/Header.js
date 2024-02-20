import React, { forwardRef, useState, useRef } from "react";
import "../styles/Navbar.css";
import {
  Offcanvas,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
  Navbar,
} from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ expand, aboutRef, homeRef, skillsRef, projectsRef }) {

  const scrollIntoView = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="pt-4"
      // fixed="top"
      id="navbar"
    >
      <Container fluid>
        <Navbar.Brand onClick={() => scrollIntoView(homeRef)} className="ms-4">
          JB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <RxHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              JB
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-2 gap-2">
              <Nav.Link onClick={() => scrollIntoView(skillsRef)}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(skillsRef)}>
                Skills
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(projectsRef)}>
                Projects
              </Nav.Link>
              <Nav.Link>Resume</Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(homeRef)}>Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
