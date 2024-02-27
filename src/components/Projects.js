import React, { forwardRef } from "react";
import "../styles/Projects.css";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import pic from '../assets/my-picture.jpeg'
import Masonry from 'react-masonry-css'
import { SlMagnifierAdd } from "react-icons/sl";
import { RxGithubLogo } from "react-icons/rx";
// import {}

const Projects = forwardRef((props, ref) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          {/* <RxGithubLogo/> */}
          {/* <arr */}
          <h6>Demo</h6>
          <h6>Github</h6>
        </Modal.Footer>
      </Modal>
      <div className="section" id="projects-container" style={{ filter: modalShow ? "blur(4px)" :null}}>
      <div id="project-heading" className="section-heading"><h2>Some of my work </h2><span>more to come ...</span></div>
      <div
        ref={ref}
        id="projects"
      >

        <div className="project-card" >
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" onClick={() => setModalShow(true)} />

        </div>
        <div className="project-card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div>
        <div className="project-card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div> <div className="project-card">
          {/* <img src={pic} /> */}
          <div className="cover">
            <h3>Trigli</h3>
            <h6>ReactJS, React Bootstrap</h6></div>
          <SlMagnifierAdd className="magnifier" />
        </div>

      </div>
    </div >
    </>
  );
});

export default Projects;
