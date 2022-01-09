import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const ImageCover = ({ imageClass, imageUrl }) => {
  return (
    <ImageCoverContainer className={imageClass}>
      <Image
        src={imageUrl}
        alt="latest story"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Overlay></Overlay>
    </ImageCoverContainer>
  );
};

// styled component
const ImageCoverContainer = styled.div`
  position: relative;
  user-select: none;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.overlayColor};
  transition: all 0.3s ease-out;
`;
