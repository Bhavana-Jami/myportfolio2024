import React, { forwardRef,useRef } from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";

const Home = forwardRef((props, ref) => {

  return (
    <Container id="home" ref={ref} className="section">
     
      <Row id="hi" >Hi, I am</Row>
      <Row id="name" >Bhavana Jami.</Row>
      <Row id="tagline">I love to create, develop.</Row>
      <Row id="description">I am currently working in TCS as Associate Software Developer.</Row>
      <Row id="knowmore">Know More..
        {/* <Col className="knowmore">Know More..</Col> */}
        {/* <Col className="knowmore">Know More..</Col> */}
      </Row>
    </Container>
  );
});

export default Home;
