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
                href="https://drive.google.com/file/d/1cUPgZb2tmGJBzD9Z7YaqWY4vGWSEvFG9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  id="resume"
                  variant="outline-info"
                  title="Lets code together!"
                >
                  <i class="fa fa-envelope-o"></i> Resume
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
