import React, { useState } from "react";
import style from "./Task.module.css";
import TaskButton from "../UI/buttons/ TaskButton/TaskButton";

const Task = ({ id }: { id: number }) => {
  const [done, setDone] = useState(false);

  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <div className={style.checkboxAndTimeContainer}>
          <input
            onChange={() => {
              setDone(!done);
            }}
            className={style.myCheckbox}
            type="checkbox"
            id={id.toString()}
            name="done"
          />
          <label htmlFor={id.toString()}></label>
          <div className={style.time}>12:00 pm</div>
        </div>
        <div className={style.taskBody}>
          <h3 className={style.title}>sg jsg ksdf dsfgsjhfg djs gju iopo[</h3>

          <p className={style.description}>jhuyu yuyd trd6 dd d ff</p>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <TaskButton>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 19.25H13.75"
            ></path>
          </svg>
        </TaskButton>
        <TaskButton>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.75 7.75L7.59115 17.4233C7.68102 18.4568 8.54622 19.25 9.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.75 7.5V6.75C9.75 5.64543 10.6454 4.75 11.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.5"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 7.75H19"
            ></path>
          </svg>
        </TaskButton>
      </div>
    </div>
  );
};

export default Task;
