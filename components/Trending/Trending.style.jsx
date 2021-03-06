import styled from "styled-components";

// styled components
export const TrendingContainer = styled.div`
  width: 350px;
  height: fit-content;
  background-color: ${(props) => props.theme.cardBackground};

  @media screen and (${props => props.theme.mobileSize}) {
    width: 95%;
    margin-inline: auto;
    margin-bottom: 2rem;
  }
`;
export const TrendingHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
  color: black;
  font-size: ${(props) => props.theme.fontSizeMedium};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;
export const Topic = styled.h5`
  font-weight: ${(props) => props.theme.fontWeightMedium};
  padding: 1rem 2rem;
  &:hover {
    text-decoration: underline;
    background-color: ${(props) => props.theme.buttonHoverColor};
  }
`;
