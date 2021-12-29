import React from "react";

// style
import {
  FeaturedStoriesContainer,
  StoriesContainer,
} from "./FeaturedStories.style";

// components
import { Story } from "../Story/Story.component";

export const FeaturedStories = () => {
  return (
    <FeaturedStoriesContainer>
      <h1>FEATURED STORIES</h1>
      <StoriesContainer>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </StoriesContainer>
    </FeaturedStoriesContainer>
  );
};
