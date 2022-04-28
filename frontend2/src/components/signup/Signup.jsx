import React from "react";
import Link from "next/link";
import { SignupContainer } from "./signupStyle";
import ReactTypingEffect from "react-typing-effect";

const Signup = () => {
  const typing = ["signup", "todolist", "ksh5324"];
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
      <SignupContainer>
        <div className="signupform">
          <label>
            name
            <input type="text" />
          </label>
          <label>
            email
            <input type="email" />
          </label>
          <label>
            password
            <input type="password" />
          </label>
          <label>
            check password
            <input type="password" />
          </label>
          <button className="signup-button">SignUp</button>
          <div className="or-line">
            <div className="line"></div>
            <div className="or">OR</div>
          </div>
          <Link href="/">
            <a>
              <button className="login">Login</button>
            </a>
          </Link>
        </div>
      </SignupContainer>
    </>
  );
};

export default Signup;
