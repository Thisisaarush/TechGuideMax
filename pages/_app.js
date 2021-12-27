import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";

// theme
import { theme } from "../styles/theme";

// components
import { Navigation } from "../components/Navigation/Navigation.component";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
