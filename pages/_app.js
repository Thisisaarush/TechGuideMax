import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";

// theme
import { theme } from "../styles/theme";

// components
import { Navigation } from "../components/Navigation/Navigation.component";
import { Footer } from "../components/Footer/Footer.component";
import { ToTop } from "../components/ToTop/ToTop.component";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <ToTop />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
