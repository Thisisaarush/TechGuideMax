import styled from "styled-components";

// styled components
export const OtherVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;

  @media screen and (${(props) => props.theme.mobileSize}) {
    height: 200px;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-between;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    height: 300px;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-between;
  }
`;
export const VideoContainer = styled.div`
  width: 400px;
  height: 45%;
  position: relative;
  .image-container {
    width: 350px;
    height: 100%;
    position: relative;
    margin-left: 2rem;
  }
  h4 {
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 50px;
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 47%;
    height: 50%;
    .image-container {
      width: 100%;
      margin-left: auto;
    }
    h4 {
      position: relative;
      width: 95%;
      left: auto;
      bottom: auto;
      font-size: ${(props) => props.theme.fontSizeSmall};
      margin-top: 0.5rem;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 47%;
    height: 50%;
    .image-container {
      width: 100%;
      margin-left: auto;
    }
    h4 {
      position: relative;
      width: 95%;
      left: auto;
      bottom: auto;
      margin-top: 1rem;
    }
  }
`;
export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
