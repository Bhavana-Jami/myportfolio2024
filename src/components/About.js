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
  // useGSAP(
  //   () => {
  //     const boxes = gsap.utils.toArray('.box');
  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         x: 150,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'bottom bottom',
  //           end: 'top 20%',
  //           scrub: true,
  //           // markers: true,
  //         },
  //       });
  //     });
  //   },
  //   { scope: main }
  // );
  useEffect(() => {
    // Select each word in the paragraph
    const words = paragraphRef.current.querySelectorAll(".word");

    // GSAP animation: animates each word one after the other
    gsap.to(words, {
      fontSize:"4rem",
      color: "#5928e5", // Purple color
      stagger: 0.4, // Delay between each word
      duration: 1,  // Duration for each word
      ease: "power2.inOut", // Smoothing the animation
    });
  });
 const paragraph = "Goal-oriented, passionate Front End Developer with 1 year of expertise in developing beautiful, functional applications and overall 2.1 years of experience being a software engineer."
 const words = paragraph.split(' ').map((word, index) => (
  <span key={index} className="word" style={{ color: '#fff',fontSize:"4rem" }}>
    {word}
  </span>
));
  return (

    <Container ref={ref} fluid className="section d-flex justify-content-center align-items-center flex-column about_section">
      <Row id="about-heading" className="text-center h2"><Col>a lil about <span>Me!</span></Col></Row>
      <Row className="justify-content-center text-center w-75 fs-2 " ><Col ref={paragraphRef} ><h1>{words}</h1></Col></Row>
      <Row className="sm-icon-container justify-content-center justify-content-md-center">
        <Col xs="auto" className="p-2">
          <a href="https://www.linkedin.com/in/bhavana-jami-47a6081b2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </Col>
        <Col xs="auto" className="p-2">
          <a href="https://github.com/Bhavana-Jami" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </Col>
        <Col xs="auto" className="p-2">
          <a href="https://instagram.com/blue.wonk?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </Col>
        <Col xs="auto" className="p-2">
          <a href="https://www.youtube.com/channel/UCnEZWne1_AiGjyoZ9gjkICg" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </Col>
      </Row>
    </Container>
  );
});

export default About;
