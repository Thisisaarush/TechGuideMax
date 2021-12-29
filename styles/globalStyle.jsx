import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.primaryColor};
  }

  body {
    font-family: ${(props) => props.theme.headingFont}, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }

  button, input {
    border: none;
  }
  
  input {
    font-family: ${(props) => props.theme.bodyFont};;
  }

  button {
    font-family: ${(props) => props.theme.headingFont};
  }

  h1,h2,h3,h4,h5,h6 {
    text-transform: uppercase;
  }
`;
