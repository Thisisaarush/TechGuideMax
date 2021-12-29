import React from "react";
import Image from "next/image";

// style
import { StoryContainer, StoryTextContainer } from "./Story.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";

export const Story = () => {
  return (
    <StoryContainer>
      <ImageCover
        imageClass="story-image-container"
        imageUrl="/images/demo.png"
      />

      <StoryTextContainer className="story-text-container">
        <h4>
          iPhone 14 and Mixed Reality Headset to Feature Wi-Fi 6E, According to
          Kuo
        </h4>
        <AuthorWithDate author="aarush" date="december 21, 2021" />
      </StoryTextContainer>
    </StoryContainer>
  );
};
