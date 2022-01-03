import React from "react";
import Image from "next/image";

// style
import {
  OtherVideosContainer,
  VideoContainer,
  PlayButton,
} from "./OtherVideo.style";

// components
import { ImageCover } from "../ImageCover/ImageCover.component";

export const OtherVideo = ({
  title1,
  title2,
  imageUrl1,
  imageUrl2,
  video1,
  video2,
  setVideoUrl,
}) => {
  return (
    <OtherVideosContainer>
      <VideoContainer
        className="title-image-container"
        onClick={() => setVideoUrl(video1)}
      >
        <ImageCover imageClass="image-container" imageUrl={imageUrl1} />
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

      <VideoContainer
        className="title-image-container"
        onClick={() => setVideoUrl(video2)}
      >
        <ImageCover imageClass="image-container" imageUrl={imageUrl2} />
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
