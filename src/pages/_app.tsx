import GlobalStyle from "@/styles/GlobalStyles/GlobalStyles";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { GlobalContextProvider } from "@/Contexts/GlobalContext";
import { Toaster } from "react-hot-toast";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContextProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
