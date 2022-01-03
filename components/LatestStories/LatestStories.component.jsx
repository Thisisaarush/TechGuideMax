import React, { useState, useEffect } from "react";

// data
import { LatestStoriesData } from "../../data/LatestStories.data";

// style
import {
  LatestStoriesContainer,
  StoryTrendingContainer,
  ShowMoreButton,
} from "./LatestStories.style";

// components
import { StoryHorizontal } from "../StoryHorizontal/StoryHorizontal.component";
import { Trending } from "../Trending/Trending.component";

export const LatestStories = () => {
  const [storiesLoaded, setStoriesLoaded] = useState(5);

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
      <h1>LATEST STORIES</h1>
      <StoryTrendingContainer>
        <div className="stories-container">
          {LatestStoriesData.filter((item, idx) => idx < storiesLoaded).map(
            (data) => (
              <StoryHorizontal
                key={data.id}
                title={data.title}
                imageUrl={data.imageUrl}
                author={data.author}
                date={data.date}
              />
            )
          )}
          <div className="show-more" onClick={handleLoadMoreStories}>
            show more
          </div>
        </div>
        <Trending />
      </StoryTrendingContainer>
    </LatestStoriesContainer>
  );
};
