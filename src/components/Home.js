import React, { forwardRef, useRef } from "react";
import "../styles/Home.css";
import { Container, Row, Col, Stack } from "react-bootstrap";
import resume from "../assets/bhavanaportfolio2024.pdf"
// import Nav from "react-bootstrap";
import { BsArrowRight, BsJustify } from "react-icons/bs";
import myPic from '../assets/myPic.jpeg';
import Headroom from 'react-headroom'

import Header from "./Header";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import mynewpic from '../assets/mynewpic.png'
const Home = forwardRef(({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }, ref) => {


  const scrollIntoView = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <Container id="home" ref={ref} >
      <Headroom style={{
        'webkitTransition': 'all .5s ease-in-out',
        'mozTransition': 'all .5s ease-in-out',
        'oTransition': 'all .5s ease-in-out',
        'transition': 'all .5s ease-in-out',
      }}>
        <Header
          expand="md"
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </Headroom>
      <div className="checked_background" ></div>
      <div className="solid_background"></div>
      <div className="hero_section">
        <div className="hero_description">
          <Row id="hi">Hi, I am</Row>
          <Row id="name">Bhavana Jami.</Row>
          <Row className="tagline">
            I love to create, develop.
          </Row>
          <Row id="knowmore">
            <Col id="resume" >
              {/* <a style={{ textDecoration: "none", color: "inherit" }} href={resume} target="_blank" rel="noopener noreferrer">
                Contact
              </a> */}
              <Nav.Link onClick={() => scrollIntoView(contactRef)}>
                Skills
              </Nav.Link>
            </Col>
            <Col id="hireMe" >
              <Nav.Link onClick={() => scrollIntoView(aboutRef)}>
                Know More &nbsp; &nbsp; <BsArrowRight />
              </Nav.Link>
            </Col>
          </Row>
        </div>
        <div className="hero_image">

      
         
          
          <img src={mynewpic} className="my_image" alt="My Picture" />
        </div>
      </div>
    </Container>
  );
});

export default Home;
