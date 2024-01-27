import { React, forwardRef } from "react";
import "../styles/Projects.css";
import { Container, Row, Col } from "react-bootstrap";

const Projects = forwardRef((props, ref) => {
  return (
    // <div ref={ref}  className='projects-container'>

    //    {projectDetails.map((project) => (

    //       <div className='card'>
    //       <h1>{project.name}</h1>
    //       <p>{project.description}</p>

    //       </div>

    //   ))}
    // </div>
    <Container
      ref={ref}
      className="d-flex justify-content-center align-items-start flex-column section"
    >
      <h1>Projects</h1>
    </Container>
  );
});

export default Projects;
