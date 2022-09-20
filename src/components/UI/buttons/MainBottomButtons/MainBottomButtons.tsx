import React, { useContext } from "react";
import MyBtn from "@/components/UI/buttons/MyBtn";
import style from "./MainBottomButtons.module.css";

const MainBottomButtons = ({ children, theme, ...props }: any) => {
  return (
    <MyBtn
      {...props}
      className={theme ? style.btn.concat(" ", style.changeTheme) : style.btn}
    >
      {children}
    </MyBtn>
  );
};

export default MainBottomButtons;
