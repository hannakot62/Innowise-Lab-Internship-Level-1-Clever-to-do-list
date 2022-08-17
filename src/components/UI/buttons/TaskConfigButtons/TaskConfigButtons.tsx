import React from "react";
import MyBtn from "../MyBtn";
import style from "./TaskConfigButtons.module.css";

const TaskConfigButtons = ({ children, ...props }: any) => {
  return (
    <MyBtn {...props} className={style.btn}>
      {children}
    </MyBtn>
  );
};

export default TaskConfigButtons;
