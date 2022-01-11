import styled from "styled-components";

// styled components
export const FeaturedStoriesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin-bottom: 2rem;
    }
  }
`;
export const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 5rem;

  @media screen and (${(props) => props.theme.tabSize}) {
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
