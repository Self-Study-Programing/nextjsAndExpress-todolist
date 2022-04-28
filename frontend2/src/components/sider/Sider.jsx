import React from "react";
import profile from "../../assets/images/profile.png";
import Image from "next/image";
import { SiderContainer } from "./siderStyle";

const Sider = () => {
  return (
    <SiderContainer>
      <div className="profile">
        <div className="self">
          <div className="profile-img">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="img">
              <Image src={profile} />
            </div>
          </div>
          <div classNameName="abc">
            <div className="name">ksh</div>
            <div className="name-des">개발자가 싫은 학생</div>
          </div>
        </div>
        <div className="button1">해야할일: 5개</div>
        <div className="button2">완료한 일: 2개</div>
      </div>
    </SiderContainer>
  );
};

export default Sider;
