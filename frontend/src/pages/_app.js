import "../styles/globals.css";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import wrapper from "../stores/configureStore";
import { ThemeProvider } from "styled-components";

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

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <div className="window">
        <Component {...pageProps} />
      </div>
    </GlobalContainer>
  );
}

export default wrapper.withRedux(MyApp);
