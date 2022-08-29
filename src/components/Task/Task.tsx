import React, { useEffect, useState } from "react";
import style from "./Task.module.css";
import TaskButton from "../UI/buttons/ TaskButton/TaskButton";
import Edit from "../UI/pics/Edit";
import Delete from "../UI/pics/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTasks, taskDoneUndone } from "../../store/slices/tasksSlice";
import {
  removeCurrentTask,
  setCurrentTask,
} from "../../store/slices/currentTaskSlice";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../firebase";
import { set } from "husky";

const Task = ({
  id,
  title,
  description,
  doneT,
  time,
}: {
  id: string;
  title: string;
  description: string;
  doneT: boolean;
  time: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allTasks = useSelector((state: any) => state.tasks.tasks);
  const [done, setDone] = useState(doneT);
  useEffect(() => {
    dispatch(taskDoneUndone(id));
    {
      if (doneT) {
        // @ts-ignore
        document.getElementById(id).click();
      }
    }
  }, [done]);

  function handleEdit() {
    dispatch(removeCurrentTask());
    dispatch(setCurrentTask(id));
  }

  function handleDelete() {
    dispatch(removeCurrentTask());
    dispatch(setCurrentTask(id));
    const del = async () => {
      await deleteDoc(doc(db, "tasks", id));
    };
    del().then((response) => {
      const newTasks = [];
      for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id === id) continue;
        newTasks.push(allTasks[i]);
      }
      allTasks.dispatch(setTasks(newTasks));
    });
  }

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
            id={id}
            name="done"
          />
          <label htmlFor={id}></label>
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
        <TaskButton onClick={handleEdit}>
          <Link className={"link"} to="/edittask">
            <Edit />
          </Link>
        </TaskButton>
        <TaskButton onClick={handleDelete}>
          <Delete />
        </TaskButton>
      </div>
    </div>
  );
};

export default Task;
