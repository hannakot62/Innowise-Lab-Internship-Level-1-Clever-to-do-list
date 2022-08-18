import React, { useState } from "react";
import style from "./Task.module.css";
import TaskButton from "../UI/buttons/ TaskButton/TaskButton";
import Edit from "../UI/pics/Edit";
import Delete from "../UI/pics/Delete";
import { Link } from "react-router-dom";
import Plus from "../UI/pics/Plus";

const Task = ({ id }: { id: number }) => {
  const [done, setDone] = useState(false);

  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <div className={style.checkboxAndTimeContainer}>
          <input
            onClick={() => {
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
        <div
          className={
            done ? style.taskBody.concat(" " + style.done) : style.taskBody
          }
        >
          <h3 className={style.title}>sg jsg ksdf dsfgsjhfg djs gju iopo[</h3>

          <p className={style.description}>jhuyu yuyd trd6 dd d ff</p>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <TaskButton>
          {" "}
          <Link className={"link"} to="/edittask">
            <Edit />
          </Link>{" "}
        </TaskButton>
        <TaskButton>
          <Delete />
        </TaskButton>
      </div>
    </div>
  );
};

export default Task;
