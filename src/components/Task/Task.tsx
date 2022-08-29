import React, { useEffect, useState } from "react";
import style from "./Task.module.css";
import TaskButton from "../UI/buttons/ TaskButton/TaskButton";
import Edit from "../UI/pics/Edit";
import Delete from "../UI/pics/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskDoneUndone } from "../../store/slices/tasksSlice";

const Task = ({
  id,
  title,
  description,
  doneT,
  time,
}: {
  id: number;
  title: string;
  description: string;
  doneT: boolean;
  time: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [done, setDone] = useState(doneT);
  useEffect(() => {
    dispatch(taskDoneUndone(id));
    {
      if (doneT) {
        // @ts-ignore
        document.getElementById(id.toString()).click();
      }
    }
  }, [done]);

  // function handleEdit(){
  //   navigate('/edittask')
  // }
  //

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
          <div className={style.time}>{time.slice(0, 5)}</div>
        </div>
        <div
          className={
            done ? style.taskBody.concat(" " + style.done) : style.taskBody
          }
        >
          <h3 className={style.title}>{title}</h3>

          <p className={style.description}>{description}</p>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <TaskButton>
          <Link className={"link"} to="/edittask">
            <Edit />
          </Link>
        </TaskButton>
        <TaskButton>
          <Delete />
        </TaskButton>
      </div>
    </div>
  );
};

export default Task;
