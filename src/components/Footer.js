import React from "react";
import "../styles/Footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { IoMdRocket } from "react-icons/io";
import {
  FaArrowAltCircleUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegArrowAltCircleUp,
  FaRocket,
  FaYoutube,
} from "react-icons/fa";
function Footer({ homeRef }) {
  const scrollIntoView = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container className="footer" >
      <Row style={{ fontSize: "11px", color: "#8892b0"}}>
        <p >
          @Bhavana Jami 2024
        </p>
      </Row>
      <Row>
        <Col className="move-up-rocket">
          <Nav.Link onClick={() => scrollIntoView(homeRef)}>
            <IoMdRocket />
          </Nav.Link>
        </Col>
      </Row>
     
    </Container>
  );
}

export default Footer;
