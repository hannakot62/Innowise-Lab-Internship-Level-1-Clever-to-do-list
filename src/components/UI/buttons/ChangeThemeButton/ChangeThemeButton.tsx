import React from "react";
import style from "@/components/UI/buttons/ChangeThemeButton/ChangeThemeButton.module.css";
import MyBtn from "@/components/UI/buttons/MyBtn";
import { useSelector } from "react-redux";
const ChangeThemeButton = ({ children, ...props }: any) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <MyBtn
      {...props}
      className={
        theme == "light"
          ? style.ChangeThemeButtonlight
          : style.ChangeThemeButtondark
      }
    >
      {children}
    </MyBtn>
  );
};

export default ChangeThemeButton;
