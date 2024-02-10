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
      <Row className="sm-icon-container">
        <Col className="sm-icon" xs ="auto">
          <a
            href="https://www.linkedin.com/in/bhavana-jami-47a6081b2"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </Col>
        <Col className="sm-icon"  xs ="auto">
          <a href="https://https://github.com/Bhavana-Jami" target="_blank">
            <FaGithub />
          </a>
        </Col>
        <Col className="sm-icon"  xs ="auto">
          <a href="https://instagram.com/blue.wonk?igshid=YmMyMTA2M2Y=" target="_blank">
            {" "}
            <FaInstagram />
          </a>
        </Col>
        <Col className="sm-icon"   xs  ="auto">
          <a
            href="https://www.youtube.com/channel/UCnEZWne1_AiGjyoZ9gjkICg"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="move-up-rocket">
          <Nav.Link onClick={() => scrollIntoView(homeRef)}>
            <IoMdRocket />
          </Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="copyright">@Bhavana Jami 2024</Col>
      </Row>
    </Container>
  );
}

export default Footer;
