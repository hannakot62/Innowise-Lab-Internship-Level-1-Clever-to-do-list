import React from 'react';
import style from './ChangeThemeButton.module.css'
const ChangeThemeButton = ({children, ...props}:any) => {
    return (
        <button {...props} className={style.ChangeThemeButton}>
            {children}
        </button>
    );
};

export default ChangeThemeButton;
