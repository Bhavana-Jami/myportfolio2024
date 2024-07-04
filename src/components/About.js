import "../styles/About.css";
import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPic from '../assets/myPic.jpeg';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="section d-flex justify-content-center align-items-center flex-column">
      <p id="about-heading">a lil about <span>Me!</span></p>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="image-container" md={4} sm={12}>
            <div id="propOne"></div>
            <img src={myPic} alt="Profile" />
          </Col>
          <Col className="about-description" md={5} sm={12}>
            <div>
              Hey! My name is Bhavana. Lorem ipsum is d in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>
            <div className="sm-icon-container">
              <Col className="sm-icon" xs="3">
                <a href="https://www.linkedin.com/in/bhavana-jami-47a6081b2" target="_blank">
                  <FaLinkedin />&nbsp;Linkedin
                </a>
              </Col>
              <Col className="sm-icon" xs="3">
                <a href="https://github.com/Bhavana-Jami" target="_blank">
                  <FaGithub />&nbsp;Github
                </a>
              </Col>
              <Col className="sm-icon" xs="3">
                <a href="https://instagram.com/blue.wonk?igshid=YmMyMTA2M2Y=" target="_blank">
                  <FaInstagram />&nbsp;Instagra
                </a>
              </Col>
              <Col className="sm-icon" xs="3">
                <a href="https://www.youtube.com/channel/UCnEZWne1_AiGjyoZ9gjkICg" target="_blank">
                  <FaYoutube />&nbsp;Youtube
                </a>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
});

export default About;
