import "../styles/About.css";
import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPic from '../assets/myPic.jpeg'
const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="d-flex justify-content-center align-items-start  flex-column section">
      <Row><h2>A lil about me</h2></Row>
      <Row><img src={myPic} /></Row>
      <Row>Hey! My name is Brittany and I'm a web developer with a passion for front end development and design. I'm currently a third year student at Northeastern University pursuing a degree in information science with a minor in interaction design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.

        When I'm not on the computer, I enjoy snowboarding, swimming, and petting dogs.</Row>
    </Container>
  );
});

export default About;
