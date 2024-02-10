import React, { forwardRef } from "react";
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

function Navigation({ expand, aboutRef, homeRef, skillsRef, projectsRef }) {
  const scrollIntoView = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar
      key={expand}
      expand={expand}
      className="mb-3 pt-4"
      fixed="top"
      id="navbar"
    >
      <Container fluid>
        <Navbar.Brand onClick={() => scrollIntoView(homeRef)} className="ms-5">
          JB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <span>&#9776;</span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="ms-4" id={`offcanvasNavbarLabel-expand-${expand}`}>
              JB
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 gap-4 pe-5">
              <Nav.Link onClick={() => scrollIntoView(homeRef)}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(aboutRef)}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(skillsRef)}>
                Skills
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(projectsRef)}>
                Projects
              </Nav.Link>
              <Nav.Link>Resume</Nav.Link>
            </Nav>
            <Nav>
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
