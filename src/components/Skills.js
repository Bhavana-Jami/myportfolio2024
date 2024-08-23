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
  const skills = ["<>HTML</>", ".CSS", "<script/>", "ReactJS()", "BootStrap", "git.init", "Bootstrap", "Random"]
  return (
    <div ref={ref} className="section" id="skills-container">
      <div className="section-heading" id="tech-heading">You can count me on these ..</div>
      <div className="icons">
        {/* <FaBootstrap className="skill-icon" />
          <FaReact className="skill-icon" /> */}
        {
          skills.map(skill => <div className="skill-icon">
            {/* <span id="plus_icon">+</span> */}
            <span >{skill}</span>
            <p>Some text should be here, it is a must.</p>
            </div>)
        }

      </div>
    </div>
  );
});

export default Skills;
