import React, { forwardRef, useRef, useState, useEffect } from "react";
import "../styles/Home.css";
import { Container, Row, Col, Stack } from "react-bootstrap";
import resume from "../assets/bhavanaportfolio2024.pdf"
// import Nav from "react-bootstrap";
import { BsArrowRight, BsJustify } from "react-icons/bs";
import myPic from '../assets/myPic.jpeg';
import Headroom from 'react-headroom'
import '../styles/App.css'
import Header from "./Header";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import mynewpic from '../assets/mynewpic.png'
import Background from "./Background";
const FallingBeam = ({ delay }) => {
  return (
    <div
      className="absolute top-0  bg-white opacity-50"
      style={{
        left: `${Math.random() * 10}%`,
        height: `${20 + Math.random() * 30}%`,
        animationDelay: `${delay}ms`,
        animation: 'fall 200s linear forwards',
        // width: ` 20px`
      }}
    />
  );
};
const Home = forwardRef(({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }, ref) => {


  const scrollIntoView = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBeams(prev => [...prev, Date.now()]);
      if (beams.length > 20) {
        setBeams(prev => prev.slice(1));
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [beams]);

  return (
    <Container id="home" ref={ref} className="section grid_background">
      {/* <Background/> */}
    

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{

          background: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',

          zIndex: -1
        }}
      />
      {/* <Headroom style={{
        'webkitTransition': 'all .5s ease-in-out',
        'mozTransition': 'all .5s ease-in-out',
        'oTransition': 'all .5s ease-in-out',
        'transition': 'all .5s ease-in-out',
      }}> */}
        <Header
          expand="md"
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      {/* </Headroom> */}
      {/* {beams.map((beam, index) => (
        <FallingBeam key={beam} delay={index * 100} />
      ))} */}
      {/* <div className="checked_background" ></div>
    <div className="solid_background"></div> */}
      <div className="hero_section">
        <div className="hero_description">
          <Row id="hi">Hi, I am</Row>
          <Row id="name">Bhavana Jami.</Row>
          <Row className="tagline">
            I love to create, develop.
          </Row>
          <Row id="knowmore">
            <Col id="resume" >
              <a style={{ textDecoration: "none", color: "inherit" }} href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              {/* <Nav.Link onClick={() => scrollIntoView(contactRef)}>
              Resume
            </Nav.Link> */}
            </Col>
            <Col id="hireMe" >
              <Nav.Link onClick={() => scrollIntoView(aboutRef)}>
                Contact &nbsp;&nbsp;<BsArrowRight />
              </Nav.Link>
            </Col>
          </Row>
        </div>
        <div className="hero_image">




          <img src={mynewpic} className="my_image" alt="My Picture" />
        </div>
      </div>
      {/* CSS for falling animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </Container>
  );
});

export default Home;
