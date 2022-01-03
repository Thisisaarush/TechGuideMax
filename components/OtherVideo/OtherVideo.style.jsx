import styled from "styled-components";

// styled components
export const OtherVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
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
