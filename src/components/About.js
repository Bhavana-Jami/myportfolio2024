import "../styles/About.css";
import  React, {forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="d-flex justify-content-center align-items-start  flex-column section">
      <h1>About</h1>
    </Container>
  );
});

export default About;
