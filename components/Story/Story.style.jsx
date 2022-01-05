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
`;
export const StoryTextContainer = styled.div`
  padding: 0 1rem;
  h4 {
    margin-bottom: 1rem;
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
  }
`;
