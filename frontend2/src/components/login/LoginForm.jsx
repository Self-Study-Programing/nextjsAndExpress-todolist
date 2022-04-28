import React, { useCallback, useState } from "react";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import {
  FormWrapper,
  ButtonWrapper,
  CustomButton,
  CustomButton2,
  CustomInput,
} from "./LoginFormStyle";
import { useDispatch } from "react-redux";
import { LOG_IN_SUCCESS } from "../../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("로그인: " + email, password);
      dispatch({
        type: LOG_IN_SUCCESS,
        data: { email: email, username: "ksh" },
      });
    },
    [email, password]
  );

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
                fontWeight: 300,
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
                  color: "#786450",
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
      <FormWrapper>
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
          <CustomButton onClick={onSubmitForm}>로그인</CustomButton>
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
