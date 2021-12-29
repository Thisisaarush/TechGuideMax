import React from "react";

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
  return (
    <LatestStoriesContainer>
      <h1>LATEST STORIES</h1>
      <StoryTrendingContainer>
        <div className="stories-container">
          <StoryHorizontal title="iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do not buy iPhone 13!" />
          <StoryHorizontal title="iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do not buy iPhone 13!" />
          <StoryHorizontal title="iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do not buy iPhone 13!" />
          <StoryHorizontal title="iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do not buy iPhone 13!" />
          <ShowMoreButton>
            <p>show more</p>
          </ShowMoreButton>
        </div>
        <Trending />
      </StoryTrendingContainer>
    </LatestStoriesContainer>
  );
};
