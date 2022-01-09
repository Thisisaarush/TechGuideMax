import React from "react";
import styled from "styled-components";
import { ImageCover } from "../components/ImageCover/ImageCover.component";

const Custom500 = () => {
  return (
    <Custom500PageContainer>
      <ImageCover imageClass="image-container" imageUrl="/icons/svgs/500.svg" />
    </Custom500PageContainer>
  );
};

export default Custom500;

// styled components
const Custom500PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  user-select: none;

  .image-container {
    width: 100%;
    height: 100%;
  }
`;
