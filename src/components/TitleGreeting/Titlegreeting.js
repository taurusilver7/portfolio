import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const TitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
    color: #db8b00;
  }
  div {
    color: crimson;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
      color: #fff;
      font-weight: 400;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      color: #fff;
      font-weight: 800;
    }
  }
  @media (max-width: 415px) {
    strong {
      font-size: 1em;
    }
  }
`;

const Titlegreeting = () => {
  return (
    <TitleMessage>
      <div className="titleGreeting">
        <div className="heading">
          <div className="main text-center mb-3">
            Hello,
            <br />
            <span>
              <strong>I'm Prasad. I...</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "am a Front-End Web Developer",
                  "love everything about coding",
                  "am a Quick Learner",
                  "am currently working on back-end",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </TitleMessage>
  );
};

export default Titlegreeting;
