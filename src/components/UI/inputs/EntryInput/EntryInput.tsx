import React from 'react';
import style from './EntryInput.module.css'

const EntryInput = ({...props}:any) => {
    return (
        <input {...props} className={style.entryInput}>

        </input>
    );
};

export default EntryInput;
