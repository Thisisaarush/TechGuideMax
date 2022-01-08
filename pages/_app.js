import { useRouter } from "next/router";
import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";

// theme
import { theme } from "../styles/theme";

// components
import { Navigation } from "../components/Navigation/Navigation.component";
import { Footer } from "../components/Footer/Footer.component";
import { ToTop } from "../components/ToTop/ToTop.component";
import { SmallNavigation } from "../components/SmallNavigation/SmallNavigation.component";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {router.route === "/" ? <Navigation /> : <SmallNavigation />}
        <ToTop />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
