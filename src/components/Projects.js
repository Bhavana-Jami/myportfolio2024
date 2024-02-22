import React, { forwardRef } from "react";
import "../styles/Projects.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import pic from '../assets/my-picture.jpeg'
import Masonry from 'react-masonry-css'
import { SlMagnifierAdd } from "react-icons/sl";

const Projects = forwardRef((props, ref) => {

  return (

    <div className="section" id="projects-container">
      <div id="project-heading" className="section-heading"><h2>Some of my work </h2><span>more to come ...</span></div>
      <div
        ref={ref}
        id="projects"
      >

        <div className="card" >
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div>
        <div className="card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div>
        <div className="card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div> <div className="card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div>

      </div>
    </div>
  );
});

export default Projects;
