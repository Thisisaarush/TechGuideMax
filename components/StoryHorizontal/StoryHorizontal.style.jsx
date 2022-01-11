import styled from "styled-components";

// styled components
export const StoryHorizontalContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  .image-container {
    width: 250px;
    height: 150px;
    position: relative;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    margin-bottom: 2rem;
    .image-container {
      width: 100px;
      height: 100px;
    }
  }
`;
export const StoryContent = styled.div`
  width: 60%;
  margin-left: 1rem;
  h4 {
    margin-bottom: 0.5rem;
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
    transition: all 0.2s ease-out;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: auto;
    h4 {
      font-size: ${(props) => props.theme.fontSizeTiny};
    }
  }
`;
