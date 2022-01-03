import React from "react";

// style
import { StoryContainer, StoryTextContainer } from "./Story.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";

export const Story = ({ title, imageUrl }) => {
  return (
    <StoryContainer>
      <ImageCover imageClass="story-image-container" imageUrl={imageUrl} />
      <StoryTextContainer className="story-text-container">
        <h4>{title}</h4>
        <AuthorWithDate author="aarush" date="december 21, 2021" />
      </StoryTextContainer>
    </StoryContainer>
  );
};
