import React from 'react';
import style from './EntryButton.module.css'

const EntryButton = ({children, ...props}:any) => {
    return (
        <button {...props} className={style.btn}>
            {children}
        </button>
    );
};

export default EntryButton;
