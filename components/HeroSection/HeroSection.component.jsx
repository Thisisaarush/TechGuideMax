import React from "react";
import Link from "next/link";

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

export const HeroSection = ({ HeroSectionData }) => {
  return (
    <HeroSectionContainer>
      <FirstSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[0].id)}`}>
          <a className="first-image-link">
            <ImageCover
              imageClass="first-image-container"
              imageUrl={HeroSectionData[0].imageUrl}
            />
          </a>
        </Link>
        <FirstLastTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[0].id)}`}>
            <a>
              <h1>{HeroSectionData[0].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </FirstSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[1].id)}`}>
          <a className="middle-image-link middle-first">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={HeroSectionData[1].imageUrl}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[1].id)}`}>
            <a>
              <h1>{HeroSectionData[1].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[2].id)}`}>
          <a className="middle-image-link">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={HeroSectionData[2].imageUrl}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[2].id)}`}>
            <a>
              <h1>{HeroSectionData[2].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[3].id)}`}>
          <a className="middle-image-link middle-second-last">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={HeroSectionData[3].imageUrl}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[3].id)}`}>
            <a>
              <h1>{HeroSectionData[3].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[4].id)}`}>
          <a className="middle-image-link">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={HeroSectionData[4].imageUrl}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[4].id)}`}>
            <a>
              <h1>{HeroSectionData[4].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </MiddleTextContainer>
      </MiddleSection>

      <LastSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[5].id)}`}>
          <a className="last-image-link">
            <ImageCover
              imageClass="last-image-container"
              imageUrl={HeroSectionData[5].imageUrl}
            />
          </a>
        </Link>
        <FirstLastTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[5].id)}`}>
            <a>
              <h1>{HeroSectionData[5].title}</h1>
            </a>
          </Link>
          <AuthorWithDate author="aarush" date="december 24, 2021" />
        </FirstLastTextContainer>
      </LastSection>
    </HeroSectionContainer>
  );
};
