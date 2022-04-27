import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginForm from "../components/login/loginForm";

import { Layout } from "antd";
const { Header, Sider, Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CustomSider = styled(Sider)`
  width: 30%;
  height: 100%;
  background-color: red;
`;

const CustomLayoutInLayout = styled(Layout)`
  width: 70%;
  height: 100%;
`;

const CustomHeader = styled(Header)`
  height: 15%;
  background: purple;
`;

const CustomContent = styled(Content)`
  height: 70%;
  background-color: aqua;
`;

const CustomFooter = styled(Footer)`
  height: 15%;
  background: blue;
`;

export default function Home(pageProps) {
  const { logInDone } = useSelector((state) => state.user);

  return (
    <>
      {logInDone ? (
        <CustomLayout>
          <CustomSider>Sider</CustomSider>
          <CustomLayoutInLayout>
            <CustomHeader>Header</CustomHeader>
            <CustomContent>Content</CustomContent>
            <CustomFooter>Footer</CustomFooter>
          </CustomLayoutInLayout>
        </CustomLayout>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
}
