import React, { useCallback } from "react";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import {
  FormWrapper,
  ButtonWrapper,
  CustomButton,
  CustomButton2,
  CustomInput,
} from "./LoginFormStyle";

const LoginForm = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onSubmitForm,
}) => {
  const typing = ["login", "todolist", "ksh5324"];
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "16%",
          transform: "translateX(-50%)",
        }}
      >
        <ReactTypingEffect
          text={typing}
          eraseDelay={4000}
          typingDelay={1500}
          cursorRenderer={(cursor) => (
            <h1
              style={{
                fontSize: "50px",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              {cursor}
            </h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1
                style={{
                  margin: "0 auto",
                  fontSize: "50px",
                  color: "#6358dc",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                {text}
              </h1>
            );
          }}
        />
      </div>
      <FormWrapper onFinish={onSubmitForm}>
        <div className="formform">
          <label htmlFor="user-email">이메일</label>
          <br />
          <CustomInput
            name="user-email"
            value={email}
            onChange={onChangeEmail}
            required
            autoComplete="off"
          />
        </div>
        <div className="formform">
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <CustomInput
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
            autoComplete="off"
          />
        </div>
        <ButtonWrapper>
          <CustomButton
            htmlType="submit"
            onClick={onSubmitForm}
            loading={false}
          >
            로그인
          </CustomButton>
          <div className="or-line">
            <div className="line"></div>
            <div className="or">OR</div>
          </div>
          <Link href="/signup">
            <a>
              <CustomButton2>회원가입</CustomButton2>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
