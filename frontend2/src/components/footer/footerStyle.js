import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .footer {
    margin-left: 10px;
    p {
      padding: 3px;
    }
  }

  .img {
    width: 30px;
    height: 30px;
    margin-right: 30px;
    filter: invert(100%);
  }
`;
