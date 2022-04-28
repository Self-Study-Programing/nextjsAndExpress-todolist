import styled from "styled-components";

export const SiderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;

  .abc {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .profile {
    width: 100%;
    height: 80%;
    background: white;
    border-radius: 5px;
    display: flex;
  }
  .des {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .block {
    width: 100%;
    height: 100%;
    transition: 0.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .block-con {
    width: 100%;
    height: 100%;
    background-color: #f5e8df;
    color: #786450;
  }
  .block-con:hover > .block {
    background: rgba(0, 0, 0, 0.15);
  }
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .p {
    font-size: 12px;
    font-weight: 300;
  }

  .self {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .profile-img {
    width: 79px;
    height: 79px;
    position: absolute;
    top: 40px;
    left: calc(50% - 38px);
  }
  .img {
    border-radius: 50%;
    width: 71px;
    height: 71px;
    overflow: hidden;
  }
  .circle1 {
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: #786450 #786450 #786450 transparent;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    top: -3px;
    left: -3px;
    transition: 1.5s;
  }
  .circle2 {
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: #786450 transparent #786450 #786450;
    border-radius: 50%;
    width: 79px;
    height: 79px;
    top: -5px;
    left: -5px;
    transition: 2s;
  }
  .profile-img:hover > .circle1 {
    transform: rotate(180deg);
  }
  .profile-img:hover > .circle2 {
    transform: rotate(-180deg);
  }
  .name {
    position: absolute;
    width: 80px;
    left: calc(50% - 40px);
    top: 42%;
    color: #786450;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
    font-size: 15px;
  }
  .name-des {
    position: absolute;
    width: 100px;
    left: calc(50% - 49px);
    top: 48%;
    color: #786450;
    font-size: 11px;
    font-weight: 300;
    text-align: center;
  }
  .button1 {
    width: 120px;
    height: 30px;
    border: 1px solid #786450;
    border-radius: 15px;
    font-size: 12px;
    color: #786450;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 65%;
    left: calc(50% - 60px);
    transition: 0.5s;
  }
  .button1:hover {
    background: #786450;
    color: #fff;
  }
  .button2 {
    width: 120px;
    height: 30px;
    border: 1px solid #786450;
    border-radius: 15px;
    font-size: 12px;
    color: #786450;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 77%;
    left: calc(50% - 60px);
    transition: 0.5s;
  }
  .button2:hover {
    background: #786450;
    color: #fff;
  }
`;
