import "../styles/About.css";
import React, { forwardRef, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = forwardRef((props, ref) => {

  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll(".word");

    // Create the scroll-triggered animation
    gsap.fromTo(words,
      {
        color: "#fff" // Initial color (colorless)
      },
      {
        color: "#5928e5", // Change to purple on scroll down
        stagger: 0.1, // Stagger effect between words
        scrollTrigger: {
          trigger: paragraphRef.current, // Element to trigger the scroll animation
          start: "top 90%", // When to start (trigger once 90% of the viewport)
          end: "top 20%", // When to end
          scrub: true, // Smooth transition as you scroll up/down
          reverse: true, // Animation reverses on scrolling up
        }
      }
    );
  }, []);
  const paragraph = "Goal-oriented, passionate Front End Developer with 1 year of expertise in developing beautiful, functional applications and overall 2.1 years of experience being a software engineer."
  const words = paragraph.split(' ').map((word, index) => (
    <span key={index} className="word" style={{
      color: "#fff",
      fontSize: "3rem",  // Your desired font size
      display: "inline-block"
    }}>
      {word}
    </span>
  ));
  return (
    <Container ref={ref} fluid className="section d-flex justify-content-center align-items-center flex-column about_section">
      <Row id="about-heading" className="text-center h2"><Col>a lil about <span>Me!</span></Col></Row>
      <Row className="justify-content-center text-center w-75  " ><Col ref={paragraphRef} ><h1 style={{ fontSize: "2.5rem !important" }}>{words}</h1></Col></Row>
      <Row className="sm-icon-container justify-content-center justify-content-md-center">
        <Col xs="auto">
          <a href="https://www.linkedin.com/in/bhavana-jami-47a6081b2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://github.com/Bhavana-Jami" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://instagram.com/blue.wonk?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </Col>
        <Col xs="auto" >
          <a href="https://www.youtube.com/channel/UCnEZWne1_AiGjyoZ9gjkICg" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </Col>
      </Row>
    </Container>
  );
});

export default About;
