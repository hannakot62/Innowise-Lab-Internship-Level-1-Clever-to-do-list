import React from 'react';
import style from "./SignUpInButton.module.css";
import MyBtn from "../MyBtn";

const SignUpInButton = ({children, ...props}:any) => {
    return (
        <MyBtn {...props} className={style.sBtn}>
            {children}
        </MyBtn>
    );
};

export default SignUpInButton;
