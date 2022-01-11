import styled from "styled-components";

// styled components
export const SearchContainer = styled.form`
  width: 450px;
  height: 50px;
  display: flex;
  border: 1px solid ${(props) => props.theme.borderColor};

  input {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.textColor};
    padding: 0px 10px;
  }
  button {
    width: 200px;
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColor};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.buttonHoverColor};
    }
  }

  @media screen and (${props => props.theme.mobileSize}) {
   width: 95vw;
   margin-top: 0.5rem;
  }
`;
