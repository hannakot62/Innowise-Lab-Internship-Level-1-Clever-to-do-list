import React from 'react';
import Task from "../components/Task/Task";
import Day from "../components/Day/Day";
const Main = (props:any) => {
    return (
        <div>
            <div className={'days-container'}>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </div>
            <Task/>
            <Task/>
            <Task/>
        </div>
    );
};

export default Main;
