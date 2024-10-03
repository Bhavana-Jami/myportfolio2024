import React, { useRef } from "react";
import { forwardRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { BiArrowToRight, BiRocket } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { DiEnvato } from "react-icons/di";

const Contact = forwardRef((props, ref) => {
  const homeRef = useRef(null);
  const form = useRef();

  const [namePlaceholder, setNamePlaceholder] = useState("Enter your name");
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Enter your email address"
  );
  const [messagePlaceholder, setMessagePlaceholder] = useState(
    "Hi, how are you doing? Let's connect and discuss ......"
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mptaxyf", "template_llo8io7", form.current, {
        publicKey: "rvh2CzNG1ROYzqT5p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Container
      ref={ref}
      className="section d-flex justify-content-center align-items-center flex-column p-5"
      id="contact-container"
    >
      <div style={{ maxWidth: "300px" }}>
        <Row className="mb-2 mt-2 text-center">
          <div className="available_to_work">
            <span className="dot">●</span>
            <span className="text">Available to wonk</span>
          </div>
          <h2
            style={{
              fontWeight: "900",
              color: "#ccd6f6",
              letterSpacing: "2px",
            }}
          >
            Let's connect !
          </h2>
        </Row>
      </div>
      <Form ref={form} onSubmit={sendEmail} className="w-100 w-md-75 pt-4">
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={3} className="me-2 mb-4 mb-md-0 me-sm-0 me-xs-0">
            <Form.Group
              controlId="exampleForm.ControlInput1"
              className="form-group"
            >
              <Form.Label className="form-label">Your Name</Form.Label>

              <Form.Control
                type="text"
                placeholder={namePlaceholder}
                name="user_name"
                onFocus={() => setNamePlaceholder("")}
                onBlur={() => setNamePlaceholder("Enter your name")}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              className="form-group"
            >
              <Form.Label className="form-label">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder={emailPlaceholder}
                name="user_email"
                onFocus={() => setEmailPlaceholder("")}
                onBlur={() => setEmailPlaceholder("Enter your email address")}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col md={6}>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="form-group"
            >
              <Form.Label className="form-label">Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="message"
                onFocus={() => setMessagePlaceholder("")}
                onBlur={() =>
                  setMessagePlaceholder(
                    "Hi, how are you doing? Let's connect and discuss ......"
                  )
                }
                placeholder={messagePlaceholder}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="text-center justify-content-center ps-3 pe-3">
          <Col id="shoot" className="" md={3} sm={12} xs={12}>
            {/* <Button type="submit" > */}
            Shoot &nbsp; &nbsp;
            <BsArrowRight />
            {/* </Button> */}
          </Col>
        </Row>
        <Row className="footer">
        <span>
          Bhavana Jami @ 2024</span>
          <span>
            <BiRocket />
          </span>
        </Row>
      </Form>
    </Container>
  );
});

export default Contact;
