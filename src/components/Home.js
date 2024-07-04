import React, { forwardRef, useRef } from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/bhavanaportfolio2024.pdf"
// import Nav from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

import Header from "./Header";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Home = forwardRef(({ contactRef }, ref) => {


  const scrollIntoView = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const skillsRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null)
  return (
    <Container id="home" ref={ref} >
      {/* <Header
        expand="md"
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      /> */}
     
      <div  id="blobOne">

        {/* <marquee id="marqueeOne" scrollamount="6.5" >
          I use google to center a div, lol
        </marquee>
        <marquee id="marqueeTwo" scrollamount="6">
          Wanna be girl dev.
        </marquee>
        <marquee id="marqueeThree" scrollamount="7.5">
          Waiting for that ONE chance.
        </marquee>
        <marquee id="marqueeFour" scrollamount="7">
          Wanna be girl dev.
        </marquee>
        <marquee id="marqueeFive" scrollamount="6">
          Wanna be girl dev.
        </marquee> 
        <marquee id="marqueeSix" scrollamount="7.5">
          Wanna be girl dev.
        </marquee>*/}
        {/* <marquee id="marqueeSeven" scrollamount="6.5" >
          I use google to center a div, lol
        </marquee>
        <marquee id="marqueeEight" scrollamount="6">
          Wanna be girl dev.
        </marquee> */}

      </div>
      {/* <div id="blobTwo"></div> */}
      <Row id="hi" >Hi, I am</Row>
      <Row id="name" >Bhavana Jami.</Row>
      <Row id="tagline">
        I love to create, develop.

      </Row>
      {/* <Row id="description">I am currently working in TCS as Associate Software Developer.</Row> */}
      <Row id="knowmore" className="" >
        <Col id="resume" xs={7} md={3}>
          <a style={{ textDecoration: "none", color: "none" }} href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Col>

        <Col id="hireMe" xs={7} md={5}>

          <Nav.Link onClick={() => scrollIntoView(contactRef)}>
            Contact &nbsp; &nbsp;
            <BsArrowRight />
          </Nav.Link></Col>
      </Row>
      {/* </div> */}

    </Container>
  );
});

export default Home;
