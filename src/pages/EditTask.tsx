import React, { useEffect, useState } from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import task from "../components/Task/Task";
import { removeCurrentTask } from "../store/slices/currentTaskSlice";

const EditTask = () => {
  const dispatch = useDispatch();
  const isAuth = !!useSelector((state: any) => state.user.id);
  const taskId = useSelector((state: any) => state.currentTask.currentTask);
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [task] = tasks.filter((task: any) => task.id === taskId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setTime(task.time);
    }
  }, [task]);
  //TODO:
  function handleSave() {}
  function handleCancel() {
    dispatch(removeCurrentTask());
  }

  return isAuth ? (
    <div className={"task-config-container"}>
      <h1 className={"new-edit-task"}>Edit Task</h1>
      <input
        className={"title"}
        type={"text"}
        placeholder={title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <textarea
        className={"description"}
        placeholder={description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <hr />
      <div className={"time-container"}>
        <h4>Time:</h4>
        <input
          className={"input-time"}
          type={"time"}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className={"buttons-task-config-container"}>
        <TaskConfigButtons onClick={handleCancel}>
          {" "}
          <Link className={"link"} to="/todos">
            Cancel{" "}
          </Link>
        </TaskConfigButtons>
        <TaskConfigButtons onClick={handleSave}>
          {" "}
          <Link className={"link"} to="/todos">
            Save
          </Link>
        </TaskConfigButtons>
      </div>
    </div>
  ) : (
    <h1>
      First you need to <Link to={"/"}>sign in</Link>
    </h1>
  );
};

export default EditTask;
