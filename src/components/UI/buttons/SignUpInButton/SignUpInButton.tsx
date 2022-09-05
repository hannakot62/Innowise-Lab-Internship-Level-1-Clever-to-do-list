import React from "react";
import style from "@/components/UI/buttons/SignUpInButton/SignUpInButton.module.css";
import MyBtn from "@/components/UI/buttons/MyBtn";
import { useSelector } from "react-redux";

const SignUpInButton = ({ children, ...props }: any) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <MyBtn
      {...props}
      className={theme == "light" ? style.sBtnlight : style.sBtndark}
    >
      {children}
    </MyBtn>
  );
};

export default SignUpInButton;
