import styled from "styled-components";

// styled components
export const StoryContainer = styled.div`
  width: 290px;
  height: 400px;
  background-color: ${(props) => props.theme.cardBackground};
  display: flex;
  flex-direction: column;

  .story-image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .image-container {
    height: 50%;
    margin-bottom: 2rem;
  }

  @media screen and (${props => props.theme.mobileSize}) {
    width: 100%;
    height: 420px;
  }
`;
export const StoryTextContainer = styled.div`
  padding: 0 1rem;
  h4 {
    margin-bottom: 1rem;
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
    transition: all 0.2s ease-out;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  @media screen and (${props => props.theme.mobileSize}) {
    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;
