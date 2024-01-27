import { React, forwardRef } from "react";
import "../styles/Skills.css";
import { Container, Row, Col } from "react-bootstrap";

const Skills = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      className="d-flex justify-content-center align-items-start flex-column section"
    >
      <h1>Skills</h1>
    </Container>
  );
});

export default Skills;
