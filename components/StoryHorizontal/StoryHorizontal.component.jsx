import React from "react";
import Link from "next/link";

// style
import {
  StoryHorizontalContainer,
  StoryContent,
} from "./StoryHorizontal.style";

// components
import { AuthorWithDate } from "../AuthorWithDate/AuthorWithDate.component";
import { ImageCover } from "../ImageCover/ImageCover.component";

export const StoryHorizontal = ({ title, imageUrl, author, date, id }) => {
  return (
    <StoryHorizontalContainer>
      <Link href={`/story/latest/${encodeURIComponent(id)}`}>
        <a>
          <ImageCover imageClass="image-container" imageUrl={imageUrl} />
        </a>
      </Link>
      <StoryContent>
        <Link href={`/story/latest/${encodeURIComponent(id)}`}>
          <a>
            <h4>{title}</h4>
          </a>
        </Link>
        <AuthorWithDate author={author} date={date} />
      </StoryContent>
    </StoryHorizontalContainer>
  );
};
