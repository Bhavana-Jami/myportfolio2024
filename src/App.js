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
import Contact from "./components/Contact";
import RevealText from "./components/RevealText";
import Background from "./components/Background";
import ProjectsArchive from "./components/ProjectsArchive";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  return (
    // <Router>
    <Container id="app">
      <Home
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
     
        {/* <Routes>
          <Route path="/projects-archive" element={<ProjectsArchive />} />
        </Routes> */}
         {/* </Router> */}
    </Container>
   



  );
}

export default App;
