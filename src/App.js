import "./styles/App.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
// import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Header from "./components/Header";
import Fuck from "./components/Fuck";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// import Card from "./components/Card";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Container id="app" fluid>


{/* <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
  </Routes>
  <Footer/>
</Router> */}




      <Header
        expand="md"
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer homeRef={homeRef} /> 
{/* <Fuck/> */}
    </Container>
  );
}

export default App;
