import "../styles/globals.css";
import styled from "@emotion/styled";
import wrapper from "../stores";

const GlobalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .window {
    width: 600px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default wrapper.withRedux(MyApp);
