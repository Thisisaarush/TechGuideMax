import React from "react";

// style
import {
  FeaturedVideosContainer,
  VideosContainer,
} from "./FeaturedVideos.style";

// components
import { Video } from "../Video/Video.component";
import { OtherVideo } from "../OtherVideo/OtherVideo.component";

export const FeaturedVideos = () => {
  return (
    <FeaturedVideosContainer>
      <h1>FEATURED VIDEOS</h1>
      <VideosContainer>
        <Video videoID="oCR0IUiFvzE" />
        <OtherVideo
          title1="iPhone 14 Pro Max Ultra Fully Leaked?"
          title2="iPhone 14 Pro Max Ultra Fully Leaked? Second"
        />
      </VideosContainer>
    </FeaturedVideosContainer>
  );
};
