import React, { useCallback } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../../hooks/useInput";
import ReactTypingEffect from "react-typing-effect";

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  h1 {
    font-size: 50px;
    font-weight: 900;
    margin: 0;
    position: absolute;
    top: 30px;
    text-transform: uppercase;
    color: #6358dc;
    font-family: "Poppins";
  }

  .or-line {
    width: 100%;
    margin: 0 auto;
    height: 30px;
    position: relative;

    .line {
      position: absolute;
      top: 25px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
    }
    .or {
      position: absolute;
      top: 25px;
      left: 50%;
      background-color: white;
      width: 100px;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }

  .formform {
    width: 60%;
    margin: 10px;

    label {
      font-size: 18px;
    }
  }
`;

const CustomInput = styled(Input)`
  height: 40px;
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const CustomButton = styled(Button)`
  width: 100%;
  height: 45px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  background-color: #6358dc;
  margin-top: 10px;
  border: none;
  color: white;
  border-radius: 5px;
  &:hover {
    background: rgba(109, 98, 230, 1);
    color: #fff;
  }
`;

const CustomButton2 = styled(Button)`
  width: 100%;
  height: 45px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
  margin-top: 20px;
  border: none;
  color: black;
  border-radius: 7px;
`;

const LoginForm = () => {
  const typing = ["login", "todolist", "ksh5324"];
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
  }, [email, password]);

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
              <h1 style={{ margin: "0 auto" }}>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{
                        fontSize: "50px",
                        color: "#6358dc",
                        fontWeight: 900,
                        textTransform: "uppercase",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
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
          <CustomButton htmlType="submit" loading={false}>
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
