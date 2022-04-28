import React from "react";
import { ContentContainer } from "./contentStyled";
import { useSelector } from "react-redux";
import Item from "../item/Item";

const Content = () => {
  const { item } = useSelector((state) => state.user);
  return (
    <ContentContainer>
      <div className="list">
        {item.map((v) => (
          <Item v={v} />
        ))}
      </div>
    </ContentContainer>
  );
};

export default Content;
