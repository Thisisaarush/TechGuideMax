import React from "react";

// style
import { TrailersContainer } from "./Trailers.style";

// components
import { OtherVideo } from "../OtherVideo/OtherVideo.component";
import { Video } from "../Video/Video.component";

export const Trailers = () => {
  return (
    <TrailersContainer>
      <h1>TRAILERS & CLIPS</h1>
      <div className="videos-container">
        <Video videoID="ZYzbalQ6Lg8" />
        <OtherVideo
          title1="Watch Iron Man in Endgame"
          title2="Captain America Civil War Trailer is Amazing!"
        />
      </div>
    </TrailersContainer>
  );
};
