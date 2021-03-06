import styled from "styled-components";

// styled components
export const ArticleContainer = styled.div`
  width: 60%;

  @media screen and (${props => props.theme.mobileSize}) {
    width: 100%;
  }
  @media screen and (${props => props.theme.tabSize}) {
    width: 100%;
  }
`;
export const ArticleHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  .article-category {
    color: ${(props) => props.theme.secondaryColor};
    text-transform: uppercase;
  }

  @media screen and (${props => props.theme.mobileSize}) {
    margin-bottom: 2rem;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (${props => props.theme.tabSize}) {
    margin-bottom: 2rem;
  }
`;
export const ArticleContent = styled.div`
  .image-container {
    width: 100%;
    height: 400px;
  }
  .source-container {
    display: flex;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizeSmall};
    margin-top: 0.5rem;
    .source-name {
      color: ${(props) => props.theme.secondaryColor};
      margin-left: 0.5rem;
    }
  }
  .content,
  .content-2,
  .content-3 {
    font-family: ${(props) => props.theme.bodyFont};
    line-height: 1.7rem;
    margin: 3rem 0rem;
  }

  .content {
    &::first-letter {
      text-transform: capitalize;
      color: ${(props) => props.theme.primaryColor};
      font-size: 1.5rem;
    }
  }

  @media screen and (${props => props.theme.mobileSize}) {
    .image-container {
      height: 200px;
    }
  }
`;
