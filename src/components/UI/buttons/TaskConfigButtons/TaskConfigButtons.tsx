import React from "react";
import MyBtn from "@/components/UI/buttons/MyBtn";
import style from "./TaskConfigButtons.module.css";
import { useSelector } from "react-redux";

const TaskConfigButtons = ({ children, ...props }: any) => {
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

export default TaskConfigButtons;
