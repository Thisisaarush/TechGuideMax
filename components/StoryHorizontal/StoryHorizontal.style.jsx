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
`;
export const StoryContent = styled.div`
  width: 60%;
  margin-left: 1rem;
  h4 {
    margin-bottom: 0.5rem;
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
  }
`;
