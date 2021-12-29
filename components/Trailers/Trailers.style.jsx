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
  }
`;
