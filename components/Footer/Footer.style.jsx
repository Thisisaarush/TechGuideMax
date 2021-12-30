import styled from "styled-components";

// styled components
export const FooterContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 0;
`;
export const FooterText = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-family: ${(props) => props.theme.bodyFont};
    text-transform: uppercase;
  }
`;
export const SocialMediaContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;
