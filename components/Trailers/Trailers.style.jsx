import styled from "styled-components";

// styled components
export const TrailersContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  h1 {
    margin-bottom: 2rem;
  }
  .videos-container {
    margin-bottom: 5rem;
    display: flex;

    @media screen and (${(props) => props.theme.mobileSize}) {
      flex-direction: column;
      justify-content: center;
      margin-bottom: 3rem;
    }
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    h1 {
      text-align: center;
    }
  }
`;
