import React from 'react';
import style from './EntryButton.module.css'
import MyBtn from "../MyBtn";

const EntryButton = ({children, ...props}:any) => {
    return (
        <MyBtn {...props} className={style.btn}>
            {children}
        </MyBtn>
    );
};

export default EntryButton;
