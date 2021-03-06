import React, { useCallback, useState } from "react";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
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
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.get(
          `http://127.0.0.1:3080/auth/login?email=${email}&password=${password}`
        );
        console.log(res);
        dispatch({
          type: LOG_IN_SUCCESS,
          data: {
            email: res.data[0].email,
            username: res.data[0].username,
            description: res.data[0].des,
            item: res.data[0].item,
          },
        });
      } catch (e) {
        console.log(e);
      }
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
          <label htmlFor="user-email">?????????</label>
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
          <label htmlFor="user-password">????????????</label>
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
          <CustomButton onClick={onSubmitForm}>?????????</CustomButton>
          <div className="or-line">
            <div className="line"></div>
            <div className="or">OR</div>
          </div>
          <Link href="/signup">
            <a>
              <CustomButton2>????????????</CustomButton2>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
