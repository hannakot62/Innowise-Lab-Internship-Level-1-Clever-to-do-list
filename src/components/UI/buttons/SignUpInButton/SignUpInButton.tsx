import React from 'react';
import style from "./SignUpInButton.module.css";

const SignUpInButton = ({children, ...props}:any) => {
    return (
        <button {...props} className={style.sBtn}>
            {children}
        </button>
    );
};

export default SignUpInButton;
