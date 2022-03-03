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
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <HeroSectionContainer>
      <FirstSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[0].id)}`}>
          <a className="first-image-link">
            <ImageCover
              imageClass="first-image-container"
              imageUrl={`${url}${HeroSectionData[0].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <FirstLastTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[0].id)}`}>
            <a>
              <h1>{HeroSectionData[0].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[0].attributes.author}
            date={HeroSectionData[0].attributes.date}
          />
        </FirstLastTextContainer>
      </FirstSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[1].id)}`}>
          <a className="middle-image-link middle-first">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={`${url}${HeroSectionData[1].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[1].id)}`}>
            <a>
              <h1>{HeroSectionData[1].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[1].attributes.author}
            date={HeroSectionData[1].attributes.date}
          />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[2].id)}`}>
          <a className="middle-image-link">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={`${url}${HeroSectionData[2].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[2].id)}`}>
            <a>
              <h1>{HeroSectionData[2].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[2].attributes.author}
            date={HeroSectionData[2].attributes.date}
          />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[3].id)}`}>
          <a className="middle-image-link middle-second-last">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={`${url}${HeroSectionData[3].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[3].id)}`}>
            <a>
              <h1>{HeroSectionData[3].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[3].attributes.author}
            date={HeroSectionData[3].attributes.date}
          />
        </MiddleTextContainer>
      </MiddleSection>

      <MiddleSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[4].id)}`}>
          <a className="middle-image-link">
            <ImageCover
              imageClass="middle-image-container"
              imageUrl={`${url}${HeroSectionData[4].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <MiddleTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[4].id)}`}>
            <a>
              <h1>{HeroSectionData[4].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[4].attributes.author}
            date={HeroSectionData[4].attributes.date}
          />
        </MiddleTextContainer>
      </MiddleSection>

      <LastSection>
        <Link href={`/article/${encodeURIComponent(HeroSectionData[5].id)}`}>
          <a className="last-image-link">
            <ImageCover
              imageClass="last-image-container"
              imageUrl={`${url}${HeroSectionData[5].attributes.imageUrl.data.attributes.formats.small.url}`}
            />
          </a>
        </Link>
        <FirstLastTextContainer>
          <Link href={`/article/${encodeURIComponent(HeroSectionData[5].id)}`}>
            <a>
              <h1>{HeroSectionData[5].attributes.title}</h1>
            </a>
          </Link>
          <AuthorWithDate
            author={HeroSectionData[5].attributes.author}
            date={HeroSectionData[5].attributes.date}
          />
        </FirstLastTextContainer>
      </LastSection>
    </HeroSectionContainer>
  );
};
