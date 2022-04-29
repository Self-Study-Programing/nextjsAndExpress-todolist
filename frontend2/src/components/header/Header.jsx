import React, { useCallback, useState } from "react";
import { HeaderContainer } from "./headerStyle";
import { useDispatch } from "react-redux";
import { POST_ADD_SUCCESS } from "../../reducers/user";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [todo]
  );
  const onClickButton = useCallback(async () => {
    console.log("send");
    try {
      await axios.get(
        `http://127.0.0.1:3080/item/post?title=${todo}&description=${todo}`
      );
      dispatch({
        type: POST_ADD_SUCCESS,
        data: { title: todo, description: todo },
      });
      setTodo("");
    } catch (e) {
      console.log(e);
    }
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
