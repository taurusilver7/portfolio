import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";

import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import Titlegreeting from "./components/TitleGreeting/Titlegreeting";
import MyTimeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";

import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

import Particles from "react-particles-js";

const App = () => {
  return (
    <div className="app" style={{ position: "relative" }}>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          },
        }}
      />
      <MyCarousel />
      <Titlegreeting />
      <MyNavbar />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <MyTimeline />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer />
    </div>
  );
};

export default App;
