import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ITEM_DELETE, ITEM_SUCCESS_TOGGLE } from "../../reducers/user";
import Image from "next/image";
import can from "../../assets/images/can.png";

const Item = ({ v }) => {
  const dispatch = useDispatch();
  const onClickSuccess = useCallback(() => {
    dispatch({
      type: ITEM_SUCCESS_TOGGLE,
      data: v,
    });
  }, [v]);
  const onClickDelete = useCallback(() => {
    dispatch({
      type: ITEM_DELETE,
      data: v,
    });
  }, []);
  return (
    <div className="item" onClick={onClickSuccess}>
      <h3 className={v.success ? "success" : ""}>{v.title}</h3>
      <p>{v.description}</p>
      <div>2022-4-28</div>
      {v.success && (
        <div className="throw" onClick={onClickDelete}>
          <Image src={can} />
        </div>
      )}
    </div>
  );
};

export default Item;
