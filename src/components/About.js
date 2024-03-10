import "../styles/About.css";
import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPic from '../assets/myPic.jpeg'
const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="d-flex justify-content-center align-items-center flex-column section p-3 gap-4">
      <Row className="section-heading" id="about-heading"><h2>A lil about me</h2></Row>
      <Row className="overlay"><img src={myPic} /></Row>
      <Row className="about-description">Hey! My name is Brittanyand I'm a web developer with a passion for front end development and design. I'm currently a third year student minor in interaction design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.

        When I'm not on the computer, I enjoy snowboarding, swimming, and petting dogs.</Row>
    </Container>
  );
});

export default About;
