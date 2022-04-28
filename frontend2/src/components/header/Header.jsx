import React, { useCallback, useState } from "react";
import { HeaderContainer } from "./headerStyle";
import { useDispatch } from "react-redux";
import { POST_ADD_SUCCESS } from "../../reducers/user";

const Header = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [todo]
  );
  const onClickButton = useCallback(() => {
    console.log("send");
    dispatch({
      type: POST_ADD_SUCCESS,
      data: { title: todo, description: "test description" },
    });
    setTodo("");
  }, [todo]);
  return (
    <HeaderContainer>
      <div>할일 추가</div>
      <input type="text" value={todo} onChange={onChangeTodo} />
      <button onClick={onClickButton}>+</button>
      <p className="todo">Todo</p>
    </HeaderContainer>
  );
};

export default Header;
