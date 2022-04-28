import styled from "styled-components";
import { useSelector } from "react-redux";
import LoginForm from "../components/login/loginForm";
import { useEffect } from "react";
import Sider from "../components/sider";
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";

const CustomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CustomSider = styled.div`
  width: 30%;
  height: 100%;
  z-index: 2;
`;

const CustomLayoutInLayout = styled.div`
  width: 70%;
  height: 100%;
`;

const CustomHeader = styled.div`
  height: 15%;
`;

const CustomContent = styled.div`
  height: 70%;
`;

const CustomFooter = styled.div`
  height: 15%;
  background: #623400;
`;

export default function Home() {
  const { logInDone } = useSelector((state) => state.user);

  return (
    <>
      {logInDone ? (
        <CustomLayout>
          <CustomSider>
            <Sider />
          </CustomSider>
          <CustomLayoutInLayout>
            <CustomHeader>
              <Header />
            </CustomHeader>
            <CustomContent>
              <Content />
            </CustomContent>
            <CustomFooter>
              <Footer />
            </CustomFooter>
          </CustomLayoutInLayout>
        </CustomLayout>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
