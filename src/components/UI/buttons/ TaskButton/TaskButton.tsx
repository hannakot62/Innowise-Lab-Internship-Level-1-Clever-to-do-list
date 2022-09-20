import React from "react";
import MyBtn from "@/components/UI/buttons/MyBtn";
import style from "./TaskButton.module.css";

const TaskButton = ({ children, ...props }: any) => {
  return (
    <MyBtn {...props} className={style.btn}>
      {children}
    </MyBtn>
  );
};

export default TaskButton;
