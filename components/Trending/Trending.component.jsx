import Link from "next/link";
import React from "react";

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
          <Link href={`/trending/${encodeURIComponent(data.id)}`} key={data.id}>
            <a>
              <Topic>{data.title}</Topic>
            </a>
          </Link>
        ))}
      </TrendingContainer>
    </div>
  );
};
