import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  .list {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;

    .item {
      padding: 10px;
      width: 98%;
      margin: 0 auto;
      height: 60px;
      /* box-shadow: 0px 0px 4px 0px #c6b296; */
      border-bottom: 1px solid #c6b296;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      position: relative;

      .throw {
        position: absolute;
        bottom: 15px;
        right: 10px;
        width: 15px;
        height: 15px;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        transition: 0.2s;
      }
      .success {
        text-decoration: line-through;
      }

      h3 {
        /* color: #b56d2f; */
        font-size: 20px;
        font-weight: 600;
      }
      p {
        color: #914900;
        margin-top: 5px;
        font-size: 15px;
      }
      div {
        position: absolute;
        right: 10px;
        bottom: 2px;
      }
    }
  }
`;
