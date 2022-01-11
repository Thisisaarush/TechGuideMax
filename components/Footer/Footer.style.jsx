import styled from "styled-components";

// styled components
export const FooterContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 0;

  @media screen and (${(props) => props.theme.mobileSize}) {
    padding: 1rem;
  }
`;
export const FooterText = styled.div`
  h1 {
    font-size: 3rem;
  }
  p {
    font-family: ${(props) => props.theme.bodyFont};
    text-transform: uppercase;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: ${(props) => props.theme.fontSizeSmall};
    }
  }
`;
