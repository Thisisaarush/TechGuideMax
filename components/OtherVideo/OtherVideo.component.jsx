import React from "react";
import Image from "next/image";

// style
import { OtherVideosContainer, VideoContainer, PlayButton } from "./OtherVideo.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";

export const OtherVideo = ({ title1, title2 }) => {
  return (
    <OtherVideosContainer>
      <VideoContainer className="title-image-container">
        <ImageCover imageClass="image-container" imageUrl="/images/demo.png" />
        <h4>{title1}</h4>
        <PlayButton>
          <Image
            src="/icons/play-button.png"
            alt="play button"
            width={50}
            height={50}
          />
        </PlayButton>
      </VideoContainer>

      <VideoContainer className="title-image-container">
        <ImageCover imageClass="image-container" imageUrl="/images/demo.png" />
        <h4>{title2}</h4>
        <PlayButton>
          <Image
            src="/icons/play-button.png"
            alt="play button"
            width={50}
            height={50}
          />
        </PlayButton>
      </VideoContainer>
    </OtherVideosContainer>
  );
};
