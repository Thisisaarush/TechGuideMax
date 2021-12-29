import styled from "styled-components";

// styled components
export const SearchContainer = styled.form`
  width: 450px;
  height: 50px;
  display: flex;
  border: 1px solid ${(props) => props.theme.borderColor};

  input {
    width: 100%;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.textColor};
    padding: 0px 10px;
  }
  button {
    width: 200px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColor};
    text-transform: uppercase;
  }
`;
