import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <div className="first">
        <span className="first-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="first-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>

      <div className="middle">
        <span className="middle-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="middle-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>

      <div className="middle">
        <span className="middle-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="middle-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>

      <div className="middle">
        <span className="middle-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="middle-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>

      <div className="middle">
        <span className="middle-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="middle-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>

      <div className="last">
        <span className="last-image-container">
          <Image
            src="/images/demo.png"
            alt="article"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span className="first-text">
          <h1>WHERE IS SPOTIFY HIFI?</h1>
          <span>
            <p>BY</p>
            <p className="author">AARUSH</p>
          </span>
          <p>DECEMBER 24, 2021</p>
        </span>
      </div>
    </HeroSectionContainer>
  );
};

// styled components
const HeroSectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${(props) => props.theme.borderColor};
  .first,
  .last {
    grid-column: 1 / span 2;
  }
  .first,
  .last {
    display: flex;
    justify-content: space-between;
  }
  .last {
    flex-direction: row-reverse;
  }
  .middle {
    display: flex;
    position: relative;
    .middle-text {
      position: absolute;
      bottom: 20px;
      margin-left: 2rem;
    }
  }
  .first-text, .last-text {
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .first-image-container,
  .last-image-container {
    width: 50%;
    height: 300px;
    position: relative;
  }
  /* .first-image-container {
    margin-right: 2rem;
  }
  .last-image-container {
    margin-left: 2rem;
  } */
  .middle-image-container {
    width: 100%;
    height: 300px;
    position: relative;
  }
`;
