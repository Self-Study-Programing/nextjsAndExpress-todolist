import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
  height: 100%;

  .signupform {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    label {
      text-align: right;
      width: 350px;
      font-size: 18px;
      margin: 10px;

      input {
        width: 350px;
        height: 40px;
        border: none;
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
    }

    .signup-button {
      width: 350px;
      height: 45px;
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
      background-color: #786450;
      margin-top: 10px;
      border: none;
      color: white;
      border-radius: 5px;
      z-index: 3;
      &:hover {
        background: rgba(120, 100, 80, 0.9);
        color: #fff;
      }
    }
  }
  .or-line {
    width: 350px;
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

  .login {
    width: 350px;
    height: 45px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    background-color: white;
    margin-top: 20px;
    border: none;
    color: black;
    border-radius: 7px;
  }
`;
