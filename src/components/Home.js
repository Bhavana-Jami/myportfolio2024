import React, {forwardRef } from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = forwardRef((props, ref) => {
  return (
    <Container id="home" ref={ref} className="d-flex justify-content-center align-items-start text-start flex-column section">
      <Row id="hi" >Hi, my name is</Row>
      <Row id="name" >Bhavana Jami.</Row>
      <Row id="tagline">I love to create, develop.</Row>
      <Row id="description">I am currently working in TCS as Associate Software Developer,working in TCS as Associate Software Developer  </Row>
      <Row >
      <Col className="knowmore">Know More..</Col>
      <Col className="knowmore">Know More..</Col>
      </Row>

    </Container>
  );
});

// <div  className='section' id='home-container'>
// <div className='hero-section-container'>
//    <div ><p className='title1'>Hi, my name is</p></div>
//    <div ><h1 className='title2'>Bhavana Jami.</h1></div>
//    <div ><h4 className='title3'>I love to create, develop.</h4></div>
//    <div><button className='title4'>Know more ..</button></div>
// </div>
// <div className='text1'>Creative</div>
// <div className='text2'>Spiritual</div>
// <div className='text3'>Perfectionist</div>
// <div className='text4'>Explorer</div>

// <div  className='section' id='home-container'>
// <div className='hero-section-container'>
//     <div ><p className='title1'>Hi, my name is</p></div>
//     <div ><h1 className='title2'>Bhavana Jami.</h1></div>
//     <div ><h4 className='title3'>I love to create, develop.</h4></div>
//     <div><button className='title4'>Know more ..</button></div>
// </div>
// <div className='text1'>Creative</div>
// <div className='text2'>Spiritual</div>
// <div className='text3'>Perfectionist</div>
// <div className='text4'>Explorer</div>

// </div></div>

export default Home;
