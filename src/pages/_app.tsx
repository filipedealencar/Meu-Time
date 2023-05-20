import { AppProps } from "next/app";
import GlobalStyle from "../../public/GlobalStyles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
