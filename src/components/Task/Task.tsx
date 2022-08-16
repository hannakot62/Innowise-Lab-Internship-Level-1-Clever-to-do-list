import React from 'react';
import style, {buttonsContainer} from './Task.module.css'
const Task = (props:any) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.subContainer}>
                <div className={style.checkboxAndTimeContainer}>
                    <input className={style.myCheckbox} type="checkbox" id="done" name="done" value="yes"/>
                    <label htmlFor="done"></label>
                    <div className={style.time}>12:00 pm</div>
                </div>
                <div className={style.taskBody}>
                    <h3>title kjjkj uiou iopo[</h3>

                    <p className={style.description}>sajdhj kahdjhs dgsdjgdsh jghjg fhjdgf</p>
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <button>f</button>
                <button>fs</button>
            </div>
        </div>
    );
};

export default Task;
