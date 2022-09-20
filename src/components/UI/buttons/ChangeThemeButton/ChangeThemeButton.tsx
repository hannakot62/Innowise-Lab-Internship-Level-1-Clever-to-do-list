import React from "react";
import style from "./ChangeThemeButton.module.css";
import { MyBtn } from "@/components/UI";

const ChangeThemeButton = ({ children, ...props }: any) => {
  return (
    <MyBtn {...props} className={style.ChangeThemeButton}>
      {children}
    </MyBtn>
  );
};

export { ChangeThemeButton };
