import React, { useContext } from "react";
import MyBtn from "@/components/UI/buttons/MyBtn";
import style from "./TaskButton.module.css";
import { ThemeContext } from "@/theme-context/context";

const TaskButton = ({ children, ...props }: any) => {
  const theme = useContext(ThemeContext).theme;
  return (
    <MyBtn {...props} className={style.btn}>
      {children}
    </MyBtn>
  );
};

export default TaskButton;
