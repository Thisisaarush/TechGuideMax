import React from "react";

// data
// import { TrendingData } from "../../data/Trending.data";

// style
import { TrendingContainer, TrendingHeader, Topic } from "./Trending.style";

export const Trending = ({ TrendingData, margin }) => {
  return (
    <div className={margin ? margin : null}>
      <TrendingContainer>
        <TrendingHeader>
          <p>TRENDING</p>
        </TrendingHeader>
        {TrendingData.map((data) => (
          <Topic key={data.id}>{data.title}</Topic>
        ))}
      </TrendingContainer>
    </div>
  );
};
