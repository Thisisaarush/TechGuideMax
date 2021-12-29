import styled from "styled-components";

// styled components
export const LatestStoriesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10rem;
  h1 {
    margin-bottom: 2rem;
  }
`;
export const StoryTrendingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .stories-container {
    margin-right: 2rem;
  }
`;
export const ShowMoreButton = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  p {
    text-transform: uppercase;
  }
`;
