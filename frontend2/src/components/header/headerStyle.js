import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;

  div {
    width: 90%;
    text-align: right;
    padding-left: 10px;
    font-size: 15px;
  }
  input {
    margin-top: 5px;
    width: 90%;
    padding-left: 8px;
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  p {
    position: absolute;
    top: 50px;
    left: 20px;
    font-size: 15px;
    transition: 0.3s;
  }
  input:focus ~ .todo {
    position: absolute;
    top: 35px;
    left: 16px;
    font-size: 10px;
    transition: 0.3s;
  }
  button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: #704314;
    color: white;
    font-weight: 900;
  }
`;
