import React from "react";
import Image from "next/image";
import github from "../../assets/images/github.png";
import Link from "next/link";
import { FooterContainer } from "./footerStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <p>대구소프트웨어마이스터고등학교</p>
        <p>ksh5324</p>
        <p>강성훈</p>
      </div>
      <div className="img">
        <Link href="https://github.com/Self-Study-Programing/nextjsAndExpress-todolist">
          <a target="_blank">
            <Image src={github} />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
