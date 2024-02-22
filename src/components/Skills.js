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
  return (
    <div ref={ref} className="section" id="skills-container">
      <div className="section-heading" id="tech-heading">Some tech I have worked with</div>
      <div className="icons">
        <div className="section-one-icons">
          <FaBootstrap className="skill-icon" />
          <FaReact className="skill-icon" />
        </div>
        <div className="section-two-icons">



          <FaHtml5 className="skill-icon" />
          <FaCss3Alt className="skill-icon" />
          <TbBrandJavascript className="skill-icon" />
        </div>
        <div className="section-three-icons">
          {/* <SiStyledcomponents className="skill-icon" /> */}
          <FaGithub className="skill-icon" />

          <FaGithub className="skill-icon" />
        </div>

      </div>
    </div>
  );
});

export default Skills;
