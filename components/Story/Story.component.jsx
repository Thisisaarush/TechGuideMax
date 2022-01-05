import React from "react";

// style
import { StoryContainer, StoryTextContainer } from "./Story.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";
import Link from "next/link";

export const Story = ({ title, imageUrl, id }) => {
  return (
    <StoryContainer>
      <Link href={`/story/featured/${encodeURIComponent(id)}`}>
        <a className="image-container">
          <ImageCover imageClass="story-image-container" imageUrl={imageUrl} />
        </a>
      </Link>
      <StoryTextContainer className="story-text-container">
        <Link href={`/story/featured/${encodeURIComponent(id)}`}>
          <a>
            <h4>{title}</h4>
          </a>
        </Link>
        <AuthorWithDate author="aarush" date="december 21, 2021" />
      </StoryTextContainer>
    </StoryContainer>
  );
};
