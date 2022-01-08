import React, { useState } from "react";

// style
import { HowToVideosContainer, VideosContainer } from "./HowToVideos.style";

// components
import { Video } from "../Video/Video.component";
import { OtherVideo } from "../OtherVideo/OtherVideo.component";

export const HowToVideos = ({ HowToVideosData }) => {
  const [videoUrl, setVideoUrl] = useState(HowToVideosData[0].videoUrl);

  return (
    <HowToVideosContainer>
      <h1>How To Guides</h1>
      <VideosContainer>
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={HowToVideosData[1].title}
          title2={HowToVideosData[2].title}
          imageUrl1={HowToVideosData[1].imageUrl}
          imageUrl2={HowToVideosData[2].imageUrl}
          video1={HowToVideosData[1].videoUrl}
          video2={HowToVideosData[2].videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </VideosContainer>
    </HowToVideosContainer>
  );
};
