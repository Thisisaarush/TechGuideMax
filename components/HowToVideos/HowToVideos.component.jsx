import React, { useState } from "react";

// style
import { HowToVideosContainer, VideosContainer } from "./HowToVideos.style";

// components
import { Video } from "../Video/Video.component";
import { OtherVideo } from "../OtherVideo/OtherVideo.component";

export const HowToVideos = ({ HowToVideosData }) => {
  const [videoUrl, setVideoUrl] = useState(
    HowToVideosData[0].attributes.videoUrl
  );
  const url = "http://localhost:1337";

  return (
    <HowToVideosContainer>
      <h1>How To Guides</h1>
      <VideosContainer>
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={HowToVideosData[1].attributes.title}
          title2={HowToVideosData[2].attributes.title}
          imageUrl1={`${url}${HowToVideosData[1].attributes.imageUrl.data.attributes.formats.small.url}`}
          imageUrl2={`${url}${HowToVideosData[2].attributes.imageUrl.data.attributes.formats.small.url}`}
          video1={HowToVideosData[1].attributes.videoUrl}
          video2={HowToVideosData[2].attributes.videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </VideosContainer>
    </HowToVideosContainer>
  );
};
