import React from "react";
import styled from "styled-components";

export const Video = ({ videoID }) => {
  const videoUrl = `https://youtube.com/embed/${videoID}?rel=0`;

  return (
    <VideoContainer>
      <iframe
        src={videoUrl}
        width="800"
        height="450"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

// styled components
const VideoContainer = styled.div`
  width: 100%;
  @media screen and (${(props) => props.theme.mobileSize}) {
    iframe {
      width: 100%;
      height: 210px;
    }
  }
  @media screen and (${(props) => props.theme.largeDisplaySize}) {
    iframe {
      width: 1100px;
      height: 600px;
    }
  }
`;
