import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ITEM_SUCCESS_TOGGLE } from "../../reducers/user";

const Item = ({ v }) => {
  const dispatch = useDispatch();
  const onClickSuccess = useCallback(() => {
    dispatch({
      type: ITEM_SUCCESS_TOGGLE,
      data: v,
    });
  }, [v]);
  return (
    <div className="item" onClick={onClickSuccess}>
      <h3 className={v.success ? "success" : ""}>{v.title}</h3>
      <p>{v.description}</p>
      <div>2022-4-28</div>
    </div>
  );
};

export default Item;
