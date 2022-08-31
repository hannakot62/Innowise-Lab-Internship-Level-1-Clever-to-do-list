import React from "react";
import style from "./EntryButton.module.css";
import MyBtn from "../MyBtn";
import { useSelector } from "react-redux";

const EntryButton = ({ children, ...props }: any) => {
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

export default EntryButton;
