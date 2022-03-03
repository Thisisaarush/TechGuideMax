import React, { useState, useEffect } from "react";

// style
import {
  LatestStoriesContainer,
  StoryTrendingContainer,
} from "./LatestStories.style";

// components
import { StoryHorizontal } from "../StoryHorizontal/StoryHorizontal.component";
import { Trending } from "../Trending/Trending.component";

export const LatestStories = ({ LatestStoriesData, TrendingData, title }) => {
  const [storiesLoaded, setStoriesLoaded] = useState(5);
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

  useEffect(() => {}, [storiesLoaded]);
  // handling more stories to load on button click
  const handleLoadMoreStories = (e) => {
    storiesLoaded < LatestStoriesData.length
      ? setStoriesLoaded(storiesLoaded + 3)
      : (e.target.textContent = "no more") &&
        e.target.classList.add("disabled-button");
  };

  return (
    <LatestStoriesContainer>
      <h1>{title}</h1>
      <StoryTrendingContainer>
        <div className="stories-container">
          {LatestStoriesData.reverse()
            .filter((item, idx) => idx < storiesLoaded)
            .map((data) => (
              <StoryHorizontal
                key={data.id}
                title={data.attributes.title}
                imageUrl={`${url}${data.attributes.imageUrl.data.attributes.formats.small.url}`}
                author={data.attributes.author}
                date={data.attributes.date}
                id={data.id}
              />
            ))}
          {LatestStoriesData.length ? (
            <div className="show-more" onClick={handleLoadMoreStories}>
              show more
            </div>
          ) : (
            <h4>No Stories Available</h4>
          )}
        </div>
        <Trending TrendingData={TrendingData} />
      </StoryTrendingContainer>
    </LatestStoriesContainer>
  );
};
