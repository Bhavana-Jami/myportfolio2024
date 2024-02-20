import React, { forwardRef, useState } from "react";
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

  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div >
      {/* <Navbar
        key="md"
        expand="md"
        className="mb-3 pt-4"
        fixed="top"
        id="navbar"
      >
        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
        <Container fluid>
          <Navbar.Brand onClick={() => scrollIntoView(homeRef)} className="ms-5">
            JB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
            <span>&#9776;</span>
          </Navbar.Toggle>

          <Navbar.Offcanvas show={show} onHide={handleClose}
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="ms-4" id={`offcanvasNavbarLabel-expand-md`}>
                JB
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
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

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}

      <Navbar
        key={expand}
        expand={expand}
        className="pt-4"
        fixed="top"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => scrollIntoView(homeRef)} className="ms-5">
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
            <Offcanvas.Header closeButton>
             
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                JB
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5 gap-3">
                
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
                <Nav.Link onClick={() => scrollIntoView(homeRef)}>Contact</Nav.Link>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
     
    </div>
  );
}

export default Header;
