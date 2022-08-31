import React from "react";
import MyBtn from "../MyBtn";
import style from "./TaskButton.module.css";
import { useSelector } from "react-redux";

const TaskButton = ({ children, ...props }: any) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <MyBtn
      {...props}
      className={theme == "light" ? style.btnlight : style.btndark}
    >
      {children}
    </MyBtn>
  );
};

export default TaskButton;
