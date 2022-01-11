import styled from "styled-components";

// styled components
export const LatestStoriesContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10rem;
  h1 {
    margin-bottom: 2rem;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    margin-bottom: 3rem;
    h1 {
      text-align: center;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 95%;
    margin-bottom: 3rem;
    h1 {
      text-align: center;
    }
  }
`;
export const StoryTrendingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .stories-container {
    margin-right: 2rem;
  }
  .show-more {
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    user-select: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.buttonHoverColor};
    }
  }
  .disabled-button {
    background-color: grey;
    &:hover {
      background-color: grey;
    }
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    flex-direction: column;
    .show-more {
      margin-top: 3rem;
      margin-bottom: 5rem;
    }
    .stories-container {
      margin-right: auto;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    flex-direction: column;
    align-items: center;
    .show-more {
      margin-top: 3rem;
      margin-bottom: 5rem;
    }
    .stories-container {
      margin-right: auto;
    }
  }
`;
