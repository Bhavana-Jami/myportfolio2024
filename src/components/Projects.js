import React, { forwardRef, useState } from "react";
import "../styles/Projects.css";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import pic from '../assets/my-picture.jpeg'
import Masonry from 'react-masonry-css'
import { SlMagnifierAdd } from "react-icons/sl";
import { RxGithubLogo } from "react-icons/rx";
import projectImage from '../assets/Trigli.png'
import p2 from '../assets/as.png'
import p3 from '../assets/ss.png'
// import {}

const Projects = forwardRef((props, ref) => {
  const [modalShow, setModalShow] = React.useState(false);
  const projects = [{ id: 1, name: "Portfolio", techstack: "ReactJs ReactBootstrap CSS", description: "This is my portfolio website where I tried to showcase my web developement skills in the aspects of design and dvelopment", github: "git", demo: "demo" },
  { id: 2, name: "Trigli", techstack: "ReactJs|ReactBootstrap|CSS", description: "Trigli resembles a note taking app except it is specifically developed for the users to journal about their triggers and glimmers", github: "trigligit", demo: "triglidemo" },
  { id: 3, name: "BlueWonk", techstack: "ReactJsReactBootstrap", description: "Blue Wonk is my personal blog where I share various things I am personally interested in.", github: "", demo: "" },
  { id: 4, name: "Bcommerce", techstack: "NA", description: "Coming Soon", github: "NA", demo: "NA" }]
  const [selectedProject, setSelectedProject] = useState(null)
  const handleModalClick = (id) => {

    setModalShow(true)
    //  console.log(id);
    return (
      setSelectedProject(projects.filter((project) =>
        project.id === id
      )))
  }
  console.log(handleModalClick)
  return (
      <Container className="section">
        {selectedProject?.map((selecteProject) => (
          // <div>{selecteProject.description}</div>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter "
            centered
            show={modalShow}
            onHide={() => setModalShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {selecteProject.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <h4>Centered Modal</h4> */}
              <p>
                {selecteProject.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <a href={selecteProject.demo}>Demo</a>
              <a href={selecteProject.github}>Github</a>
            </Modal.Footer>
          </Modal>

        ))}

        <Container className="section" id="projects-container" style={{ filter: modalShow ? "blur(4px)" : null }}>
        <Row id="project-heading" className="section-heading" style={{ textAlign: "center", fontWeight: "bold" }}>
      <h2 style={{ fontWeight: "bold" }}>Some of my work</h2>
      <span >more to come ...</span>
    </Row>
          <Row
            ref={ref}
            id="projects"
          >


            {
              projects.map((project) => (
                <Col className="project-card" >
                  {/* <img src={pic} /> */}
                  <div className="cover">
                    <h3>{project.name}</h3>
                    <h6>{project.techstack}</h6></div>
                  <SlMagnifierAdd className="magnifier" onClick={() => handleModalClick(project.id)} />

                </Col>
              ))
            }



          </Row>
        </Container>
      </Container>
    // <Container className="section" id="projects-container">
    //   <div className="project-card">
    //     <div
    //       className="cover"
    //       style={{
    //         backgroundImage: `url(${projectImage})`, height: '300px', width: '300px', backgroundSize: 'cover',
    //         backgroundPosition: 'center'
    //       }}></div>
    //   </div>
    //   <div className="project-card">

    //     <div className="cover"
    //       c style={{
    //         backgroundImage: `url(${p2})`, height: '300px', width: '300px', backgroundSize: 'cover',
    //         backgroundPosition: 'center'
    //       }}></div>
    //   </div>
    //   <div className="project-card">

    //     <div
    //       className="cover"
    //       style={{
    //         backgroundImage: `url(${p3})`, height: '300px', width: '300px', backgroundSize: 'cover',
    //         backgroundPosition: 'center'
    //       }}></div>
    //   </div>

    // </Container>

  )
});

export default Projects;
