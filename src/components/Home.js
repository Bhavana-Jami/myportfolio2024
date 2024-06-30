import React, { forwardRef, useRef } from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import { SiStarbucks } from "react-icons/si";
const Home = forwardRef((props, ref) => {


  return (
    <Container id="home" ref={ref} className="section">
      {/* <div>  <Header
        expand="md"
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      /></div><div> */}
      
      <div id="blobOne">

        <marquee id="marqueeOne" scrollamount="6.5" >
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
        <marquee id="marqueeFour" scrollamount="7.5">
          Wanna be girl dev.
        </marquee>

      </div>
      <div id="blobTwo"></div>
      <Row id="hi" >Hi, I am</Row>
      <Row id="name" >Bhavana Jami.</Row>
      <Row id="tagline">I love to create, develop.</Row>
      {/* <Row id="description">I am currently working in TCS as Associate Software Developer.</Row> */}
      <Row id="knowmore" >
        <Col id="resume">
        Resume
        </Col>
        <Col id="hireMe">Hire Me</Col>
      </Row>
      {/* </div> */}

    </Container>
  );
});

export default Home;
