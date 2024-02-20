import React, { forwardRef } from "react";
import "../styles/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";

const Skills = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      id="skills-container"
      className="vh-100 w-100 d-flex justify-content-center align-items-center   flex-column section"
    ><Row><h2>Some tech I have worked with</h2></Row>
      <Row>
        <Col><FaHtml5 className="skill-icon"/></Col> <Col><FaHtml5 className="skill-icon"/></Col> <Col><FaHtml5 className="skill-icon"/></Col>
        <Col><FaHtml5 className="skill-icon"/></Col><Col><FaHtml5 className="skill-icon"/></Col><Col><FaHtml5 className="skill-icon"/></Col>
      </Row>
      {/* <FaCss3Alt className="skill-icon"/><FaReact className="skill-icon" /><FaBootstrap className="skill-icon"/><TbBrandJavascript className="skill-icon"/><FaGithub className="skill-icon"/> */}
    </Container>
  );
});

export default Skills;
