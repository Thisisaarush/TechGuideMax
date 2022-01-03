import React from "react";

// style
import {
  StoryHorizontalContainer,
  StoryContent,
} from "./StoryHorizontal.style";

// components
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";
import { ImageCover } from "../ImageCover/ImageCover.component";

export const StoryHorizontal = ({ title, imageUrl, author, date }) => {
  return (
    <StoryHorizontalContainer>
      <ImageCover imageClass="image-container" imageUrl={imageUrl} />
      <StoryContent>
        <h4>{title}</h4>
        <AuthorWithDate author={author} date={date} />
      </StoryContent>
    </StoryHorizontalContainer>
  );
};
