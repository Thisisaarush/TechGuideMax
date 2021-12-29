import styled from "styled-components";

// styled components
export const AuthorWithDateContainer = styled.div`
  .author-container,
  .date {
    font-family: ${(props) => props.theme.bodyFont};
    font-size: ${(props) => props.theme.fontSizeSmall};
    text-transform: uppercase;
    margin-bottom: 2px;

    .author {
      color: ${(props) => props.theme.primaryColor};
      margin-left: 4px;
    }
  }
  .author-container {
    display: flex;
  }
`;
