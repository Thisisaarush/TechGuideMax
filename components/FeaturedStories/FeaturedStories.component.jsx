import React from "react";

// data
import { FeaturedStoriesData } from "../../data/FeaturedStories.data";

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
        {FeaturedStoriesData.map((data) => (
          <Story title={data.title} imageUrl={data.imageUrl} key={data.id} />
        ))}
      </StoriesContainer>
    </FeaturedStoriesContainer>
  );
};
