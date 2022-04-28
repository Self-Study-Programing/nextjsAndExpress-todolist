import React from "react";
import { ContentContainer } from "./contentStyled";
import { useSelector } from "react-redux";

const Content = () => {
  const { item } = useSelector((state) => state.user);
  return (
    <ContentContainer>
      <div className="list">
        {item.map((v) => (
          <div className="item">
            <h3>{v.title}</h3>
            <p>{v.description}</p>
            <div>2022-4-28</div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default Content;
