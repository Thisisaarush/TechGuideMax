import React from "react";

// data
import { HeroSectionData } from "../../data/HeroSection.data";

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
          imageUrl={HeroSectionData[0].imageUrl}
        />
        <FirstLastTextContainer>
          <h1>{HeroSectionData[0].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </FirstSection>

      <MiddleSection className="middle-first">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl={HeroSectionData[1].imageUrl}
        />
        <MiddleTextContainer>
          <h1>{HeroSectionData[1].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection className="middle-second">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl={HeroSectionData[2].imageUrl}
        />
        <MiddleTextContainer>
          <h1>{HeroSectionData[2].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <ImageCover
          imageClass="middle-image-container"
          imageUrl={HeroSectionData[3].imageUrl}
        />
        <MiddleTextContainer>
          <h1>{HeroSectionData[3].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection className="middle-last">
        <ImageCover
          imageClass="middle-image-container"
          imageUrl={HeroSectionData[4].imageUrl}
        />
        <MiddleTextContainer>
          <h1>{HeroSectionData[4].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <LastSection>
        <ImageCover
          imageClass="last-image-container"
          imageUrl={HeroSectionData[5].imageUrl}
        />
        <FirstLastTextContainer>
          <h1>{HeroSectionData[5].title}</h1>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </LastSection>
    </HeroSectionContainer>
  );
};
