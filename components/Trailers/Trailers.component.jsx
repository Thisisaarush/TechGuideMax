import React, { useState } from "react";

// data
import { TrailersData } from "../../data/Trailers.data";

// style
import { TrailersContainer } from "./Trailers.style";

// components
import { OtherVideo } from "../OtherVideo/OtherVideo.component";
import { Video } from "../Video/Video.component";

export const Trailers = () => {
  const [videoUrl, setVideoUrl] = useState(TrailersData[0].videoUrl);

  return (
    <TrailersContainer>
      <h1>TRAILERS & CLIPS</h1>
      <div className="videos-container">
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={TrailersData[1].title}
          title2={TrailersData[2].title}
          imageUrl1={TrailersData[1].imageUrl}
          imageUrl2={TrailersData[2].imageUrl}
          video1={TrailersData[1].videoUrl}
          video2={TrailersData[2].videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </div>
    </TrailersContainer>
  );
};
