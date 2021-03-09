import React from "react";
import "./About.css";
import Profile from "../../assets/img/profile/Pass photo.webp";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">
          ABOUT <span>ME</span>
        </h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello! I am <strong>&nbsp;Prasad..I'm</strong>
                <br />A passionate programmer, born and brought up in India.
                <br /> I am a Full-stack Web Developer with MERN as my main
                stack. I'm very intrested in web & mobile application
                development.
                <br />
                <br />
                In 2018, I successfully completed my Engineering with
                specialization in 'Electrical and Electronics'.
                <br />
                <br />
                I have a passion for coding and challenging myself creatively.
                Using a minimalist asthetic, I create simle responsive websites
                with a whimsical twist.
                <br />
                <br />
                I love learning about new things, especially tech which solve
                burning problems with minimum resources to build better and
                scalable products.
                <br />
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best quality and service
                to them.
                <br />
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1PqVB0O9N4hGdO6yAMghn5kjez4ZF8Swi/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/taurusilver7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
