import React from "react";
import MyBtn from "../MyBtn";
import style from "./MainBottomButtons.module.css";

const MainBottomButtons = ({ children, ...props }: any) => {
  return (
    <MyBtn {...props} className={style.btn}>
      {children}
    </MyBtn>
  );
};

export default MainBottomButtons;
