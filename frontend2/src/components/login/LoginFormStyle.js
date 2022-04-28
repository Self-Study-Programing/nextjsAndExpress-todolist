import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 60%;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
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

export const CustomInput = styled.input`
  height: 40px;
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 100%;
`;

export const CustomButton = styled.button`
  width: 100%;
  height: 45px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  background-color: #6358dc;
  margin-top: 10px;
  border: none;
  color: white;
  border-radius: 5px;
  z-index: 3;
  &:hover {
    background: rgba(109, 98, 230, 1);
    color: #fff;
  }
`;

export const CustomButton2 = styled.button`
  width: 100%;
  height: 45px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
  margin-top: 20px;
  border: none;
  color: black;
  border-radius: 7px;
`;
