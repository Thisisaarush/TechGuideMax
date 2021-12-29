import React from "react";
import Image from "next/image";

// style
import {
  HeroSectionContainer,
  FirstSection,
  MiddleSection,
  LastSection,
  FirstLastTextContainer,
  MiddleTextContainer,
} from "./HeroSection.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <FirstSection>
        <ImageCover
          imageClass="first-image-container"
          imageUrl="/images/demo.png"
        />
        <FirstLastTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </FirstSection>

      <MiddleSection className="middle-first">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl="/images/demo.png"
        />
        <MiddleTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection className="middle-second">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl="/images/demo.png"
        />
        <MiddleTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <ImageCover
          imageClass="middle-image-container"
          imageUrl="/images/demo.png"
        />
        <MiddleTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection className="middle-last">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl="/images/demo.png"
        />
        <MiddleTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <LastSection>
        <ImageCover
          imageClass="last-image-container"
          imageUrl="/images/demo.png"
        />
        <FirstLastTextContainer>
          <h1>where is spotify hifi?</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </LastSection>
    </HeroSectionContainer>
  );
};
