import styled from "styled-components";

// styled components
export const FeaturedStoriesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
