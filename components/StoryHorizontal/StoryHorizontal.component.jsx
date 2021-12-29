import React from "react";

// style
import {
  StoryHorizontalContainer,
  StoryContent,
} from "./StoryHorizontal.style";

// components
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";
import { ImageCover } from "../ImageCover/ImageCover.component";

export const StoryHorizontal = ({ title }) => {
  return (
    <StoryHorizontalContainer>
      <ImageCover imageClass="image-container" imageUrl="/images/demo.png" />
      <StoryContent>
        <h4>{title}</h4>
        <AuthorWithDate author="aarush" date="december 24, 2021" />
      </StoryContent>
    </StoryHorizontalContainer>
  );
};
