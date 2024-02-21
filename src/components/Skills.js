import React, { forwardRef } from "react";
import "../styles/Skills.css";
import { Container, Row, Div } from "react-bootstrap";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";

const Skills = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      id="skills-container"
      className="vh-100 w-100 d-flex justify-content-evenly align-items-center flex-column section "
    ><Row className="section-heading " id="tech-heading">Some tech I have worked with</Row>
      <div className="icons">
        <FaHtml5 className="skill-icon" />
        <FaCss3Alt className="skill-icon" />
        <TbBrandJavascript className="skill-icon" />
        <FaReact className="skill-icon" />
        <FaBootstrap className="skill-icon" />
        <FaGithub className="skill-icon" />

      </div>
      {/* <FaCss3Alt className="skill-icon"/><FaReact className="skill-icon" /><FaBootstrap className="skill-icon"/><TbBrandJavascript className="skill-icon"/><FaGithub className="skill-icon"/> */}
    </Container>
  );
});

export default Skills;
