import React from "react";

// style
import {
  FeaturedStoriesContainer,
  StoriesContainer,
} from "./FeaturedStories.style";

// components
import { Story } from "../Story/Story.component";

export const FeaturedStories = ({ FeaturedStoriesData }) => {
  const url = "http://localhost:1337";

  return (
    <FeaturedStoriesContainer>
      <h1>FEATURED STORIES</h1>
      <StoriesContainer>
        {FeaturedStoriesData.slice(-8)
          .reverse()
          .map((data) => (
            <Story
              title={data.attributes.title}
              imageUrl={`${url}${data.attributes.imageUrl.data.attributes.formats.small.url}`}
              key={data.id}
              id={data.id}
              author={data.attributes.author}
              date={data.attributes.date}
            />
          ))}
      </StoriesContainer>
    </FeaturedStoriesContainer>
  );
};
