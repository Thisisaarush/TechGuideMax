import React from "react";
import styled from "styled-components";
import { ImageCover } from "../components/ImageCover/ImageCover.component";

const Custom404 = () => {
  return (
    <Custom404PageContainer>
      <ImageCover imageClass="image-container" imageUrl="/icons/svgs/404.svg" />
    </Custom404PageContainer>
  );
};

export default Custom404;

// styled components
const Custom404PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  user-select: none;

  .image-container {
    width: 100%;
    height: 100%;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    height: 63vh;
    .image-container {
      height: 320px;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    height: 65vh;
    .image-container {
      height: 600px;
    }
  }
`;
