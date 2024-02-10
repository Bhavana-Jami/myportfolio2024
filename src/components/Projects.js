import React, { forwardRef } from "react";
import "../styles/Projects.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import pic from '../assets/my-picture.jpeg'
import Masonry from 'react-masonry-css'

const Projects = forwardRef((props, ref) => {
  
  return (

    <Container
      ref={ref}
      className="section" id="project-container"
    >
      <Card >
        {/* <img src={pic} /> */}
        <div className="cover">
          <h3>Trigli</h3>
          <h6>ReactJS, React Bootstrap</h6></div>
        <Card.Body className="d-flex justify-content-center align-items-center flex-column ">
          {/* <Card.Title>Card Title</Card.Title> */}
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card  >
        <div className="cover">Affirmation Generator</div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card  >
        <div className="cover">Affirmation Generator</div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card  >
        <div className="cover">Affirmation Generator</div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card><Card  >
        <div className="cover">Affirmation Generator</div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card><Card  >
        <div className="cover">Affirmation Generator</div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
});

export default Projects;
