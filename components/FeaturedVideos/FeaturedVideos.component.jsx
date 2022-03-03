import React, { useState } from "react";

// style
import {
  FeaturedVideosContainer,
  VideosContainer,
} from "./FeaturedVideos.style";

// components
import { Video } from "../Video/Video.component";
import { OtherVideo } from "../OtherVideo/OtherVideo.component";

export const FeaturedVideos = ({ FeaturedVideosData }) => {
  const [videoUrl, setVideoUrl] = useState(
    FeaturedVideosData[0].attributes.videoUrl
  );
  const url = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <FeaturedVideosContainer>
      <h1>FEATURED VIDEOS</h1>
      <VideosContainer>
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={FeaturedVideosData[1].attributes.title}
          title2={FeaturedVideosData[2].attributes.title}
          imageUrl1={`${url}${FeaturedVideosData[1].attributes.imageUrl.data.attributes.formats.small.url}`}
          imageUrl2={`${url}${FeaturedVideosData[2].attributes.imageUrl.data.attributes.formats.small.url}`}
          video1={FeaturedVideosData[1].attributes.videoUrl}
          video2={FeaturedVideosData[2].attributes.videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </VideosContainer>
    </FeaturedVideosContainer>
  );
};
