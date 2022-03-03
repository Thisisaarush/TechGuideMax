import React, { useState } from "react";

// style
import { TrailersContainer } from "./Trailers.style";

// components
import { OtherVideo } from "../OtherVideo/OtherVideo.component";
import { Video } from "../Video/Video.component";

export const Trailers = ({ TrailersData }) => {
  const [videoUrl, setVideoUrl] = useState(TrailersData[0].attributes.videoUrl);
  const url = "http://localhost:1337";

  return (
    <TrailersContainer>
      <h1>TRAILERS & CLIPS</h1>
      <div className="videos-container">
        <Video videoID={videoUrl} />
        <OtherVideo
          title1={TrailersData[1].attributes.title}
          title2={TrailersData[2].attributes.title}
          imageUrl1={`${url}${TrailersData[1].attributes.imageUrl.data.attributes.formats.small.url}`}
          imageUrl2={`${url}${TrailersData[2].attributes.imageUrl.data.attributes.formats.small.url}`}
          video1={TrailersData[1].attributes.videoUrl}
          video2={TrailersData[2].attributes.videoUrl}
          setVideoUrl={setVideoUrl}
        />
      </div>
    </TrailersContainer>
  );
};
