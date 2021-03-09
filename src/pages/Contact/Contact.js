/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Contact.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">
        CONTACT <span>ME</span>
      </h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:prasad20697@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="email">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/taurusilver7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/devi-prasad-palakollu-3ab7b5141/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Lets code together!">
                  Linked<i className="fa fa-linkedin"></i>
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://taurusilver-7.web.app/#portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  id=""
                  variant="outline-secondary"
                  title="Lets code together!"
                >
                  <i className="fa fa-link">Clones</i>
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://www.instagram.com/taurusilver7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-success" title="My other projects">
                  <i className="fa fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://drive.google.com/file/d/1PqVB0O9N4hGdO6yAMghn5kjez4ZF8Swi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  id="resume"
                  variant="outline-info"
                  title="Lets code together!"
                >
                  <i className="fa fa-envelope-o"></i> Resume
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
