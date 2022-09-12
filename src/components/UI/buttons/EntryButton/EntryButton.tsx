import React from "react";
import style from "./EntryButton.module.css";
import MyBtn from "@/components/UI/buttons/MyBtn";
import { useSelector } from "react-redux";

const EntryButton = ({ children, ...props }: any) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <button
      {...props}
      className={theme === "light" ? style.btnlight : style.btndark}
    >
      {children}
    </button>
  );
};

export default EntryButton;
