import React, { useState } from "react";

// data
import { FeaturedVideosData } from "../../data/FeaturedVideos.data";

// style
import {
  FeaturedVideosContainer,
  VideosContainer,
} from "./FeaturedVideos.style";

// components
import { Video } from "../Video/Video.component";
import { OtherVideo } from "../OtherVideo/OtherVideo.component";

export const FeaturedVideos = () => {
  const [videoUrl, setVideoUrl] = useState(FeaturedVideosData[0].videoUrl);

  return (
    <FeaturedVideosContainer>
      <h1>FEATURED VIDEOS</h1>
      <VideosContainer>
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={FeaturedVideosData[1].title}
          title2={FeaturedVideosData[2].title}
          imageUrl1={FeaturedVideosData[1].imageUrl}
          imageUrl2={FeaturedVideosData[2].imageUrl}
          video1={FeaturedVideosData[1].videoUrl}
          video2={FeaturedVideosData[2].videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </VideosContainer>
    </FeaturedVideosContainer>
  );
};
