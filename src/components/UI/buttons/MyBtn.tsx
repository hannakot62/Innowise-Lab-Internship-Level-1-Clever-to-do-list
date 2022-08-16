import React from 'react';

const MyBtn = ({children, ...props}:any) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default MyBtn;
