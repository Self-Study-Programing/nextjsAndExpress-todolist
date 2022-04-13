import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import wrapper from "../stores/index";

export default function Home(pageProps) {
  const router = useRouter();
  useEffect(() => {
    // const loginEnv = useSelector((state) => state.login);
    // console.log("login:", loginEnv);
  });
  return <div></div>;
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      console.log(store);
    }
);
