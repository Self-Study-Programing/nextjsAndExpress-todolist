import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import wrapper from "../stores/configureStore";

const GlobalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff8f5;

  .window {
    width: 600px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 3px 4px 8px 2px rgba(0, 0, 0, 0.2);
    background-color: white;
    overflow: hidden;
  }
`;

function MyApp({ Component, pageProps, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <div className="window">
            {children}
            <Component {...pageProps} />
          </div>
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
