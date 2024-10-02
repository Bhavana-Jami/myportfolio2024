import React, { forwardRef, useState } from "react";
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
  const [showPlus, setShowPlus] = useState(true)
  const plusClickHandler = () => {
    setShowPlus(!showPlus)
  }
  const skills = ["<>HTML</>", ".CSS", "<script/>", "ReactJS()", "BootStrap", "git.init", "Bootstrap", "Random"]
  return (
    <div ref={ref} className="section bg-animation" id="skills-container">
        {/* <div class="" style={{position:"absolute", top:"0", left:"0", height:"100vh"}}> */}
        {/* <>
					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div id='stars4'></div></> */}
				{/* </div> */}
      <div className="section-heading" id="tech-heading">You can <span>count me on</span> these ..</div>
      <div className="icons">
        {/* <FaBootstrap className="skill-icon" />
          <FaReact className="skill-icon" /> */}
          
        {
          skills.map(skill => <div className="skill-icon" onClick={plusClickHandler}>
            {/* <span id="plus_icon" >{showPlus ? "+" : "-"}</span> */}
            
              
              <span >{setShowPlus&&skill}</span>
            <p>Some text should be here, it is a must.</p>
          </div>)
        }
        

      </div>
    </div>
  );
});

export default Skills;
