import React from "react";
import MyBtn from "../MyBtn";
import style from "./MainBottomButtons.module.css";
import { useSelector } from "react-redux";

const MainBottomButtons = ({ children, theme, ...props }: any) => {
  const AppTheme = useSelector((state: any) => state.theme.theme);
  return (
    <MyBtn
      {...props}
      className={
        theme
          ? AppTheme == "light"
            ? style.btnlight.concat(" ", style.changeThemelight)
            : style.btndark.concat(" ", style.changeThemedark)
          : AppTheme == "light"
          ? style.btnlight
          : style.btndark
      }
    >
      {children}
    </MyBtn>
  );
};

export default MainBottomButtons;
