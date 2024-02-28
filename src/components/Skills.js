import React, { forwardRef } from "react";
import "../styles/Skills.css";
import { TbBrandJavascript } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

const Skills = forwardRef((props, ref) => {
  const skills = ["<>HTML</>",".CSS","<script/>","ReactJS()","BootStrap","git.init","Bootstrap"]
  return (
    <div ref={ref} className="section" id="skills-container">
      <div className="section-heading" id="tech-heading">Some tech I have worked with</div>
      <div className="icons">
          {/* <FaBootstrap className="skill-icon" />
          <FaReact className="skill-icon" /> */}
          {
            skills.map(skill => <span className="skill-icon">{skill}</span>)
          }
        
      </div>
    </div>
  );
});

export default Skills;
