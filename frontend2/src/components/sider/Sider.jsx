
import React from "react";
import profile from "../../assets/images/profile.png";
import Image from "next/image";
import { SiderContainer } from "./siderStyle";

const Sider = () => {
import React, { useCallback, useMemo } from "react";
import profile from "../../assets/images/profile.png";
import Image from "next/image";
import { SiderContainer } from "./siderStyle";
import { useSelector } from "react-redux";

const Sider = () => {
  const { me, item } = useSelector((state) => state.user);
  const todoWork = useMemo(
    () => item.filter((v) => v.success === false).length,
    [item]
  );
  const successWork = useMemo(
    () => item.filter((v) => v.success === true).length,
    [item]
  );
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
            <div className="name">{me.username}</div>
            <div className="name-des">개발자가 싫은 학생</div>
          </div>
        </div>
        <div className="button1">해야할일: {todoWork}개</div>
        <div className="button2">완료한 일: {successWork}개</div>
      </div>
    </SiderContainer>
  );
};

export default Sider;
