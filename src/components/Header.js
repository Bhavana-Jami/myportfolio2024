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
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

function Header({ expand, aboutRef, homeRef, skillsRef, projectsRef }) {

  const scrollIntoView = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <Navbar
      key={expand}
      expand={expand}
      // className="pt-5"
      // fixed="top"
      id="navbar"
    >
      <Container fluid >
        <Navbar.Brand onClick={() => scrollIntoView(homeRef)} >
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
            {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              JB
            </Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center flex-grow-1 gap-4 fw-bold">
              <Nav.Link onClick={() => scrollIntoView(skillsRef)}>
                Resume
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(skillsRef)}>
                Skills
              </Nav.Link>
              <Nav.Link onClick={() => scrollIntoView(projectsRef)}>
                Projects
              </Nav.Link>
              
              <Nav.Link to="https://bluewonk-94503.web.app/" href="https://bluewonk-94503.web.app/">Blog</Nav.Link>
              {/* <Nav.Link onClick={() => scrollIntoView(projectsRef)}>
                Resume
              </Nav.Link> */}
              <Nav.Link>
                {/* <BsBrightnessHigh /> */}
                {/* <BiMoon /> */}
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
