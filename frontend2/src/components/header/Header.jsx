import React, { useState } from "react";
import { HeaderContainer } from "./headerStyle";

const Header = () => {
  return (
    <HeaderContainer>
      <div>할일 추가</div>
      <input type="text" />
      <button>+</button>
      <p className="todo">Todo</p>
    </HeaderContainer>
  );
};

export default Header;
