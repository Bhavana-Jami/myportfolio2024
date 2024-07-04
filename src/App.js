import "./styles/App.css";
import React, { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
// import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";

// import Card from "./components/Card";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  return (
    <Container id="app">
      <div style={{height:"100vh",display:"flex",justifyContent:"space-evenly",marginTop:"-5.5rem",flexDirection:"column"}}>

     
      <Header
        expand="md"
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Home ref={homeRef}
        contactRef={contactRef}

      />
       </div>
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
<Footer/>
    </Container>
  );
}

export default App;
