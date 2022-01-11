import styled from "styled-components";

// styled components
export const FeaturedVideosContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    padding-bottom: 3rem;
    justify-content: center;
    align-items: center;
  }
`;
export const VideosContainer = styled.div`
  display: flex;

  @media screen and (${(props) => props.theme.mobileSize}) {
    flex-direction: column;
    justify-content: center;
  }
`;
