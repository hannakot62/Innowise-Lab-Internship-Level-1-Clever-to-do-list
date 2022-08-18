import React from "react";
import MyBtn from "../components/UI/buttons/MyBtn";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import Plus from "../components/UI/pics/Plus";

const NewTask = () => {
  return (
    <div className={"task-config-container"}>
      <h1 className={"new-edit-task"}>New Task</h1>
      <input className={"title"} type={"text"} placeholder={"Title"} />
      <hr />
      <textarea
        className={"description"}
        placeholder={"Description"}
      ></textarea>
      <hr />
      <div className={"time-container"}>
        <h4>Time:</h4>
        <input className={"input-time"} type={"time"} />
      </div>
      <div className={"buttons-task-config-container"}>
        <TaskConfigButtons>
          {" "}
          <Link className={"link"} to="/todos">
            Cancel
          </Link>
        </TaskConfigButtons>
        <TaskConfigButtons>
          {" "}
          <Link className={"link"} to="/todos">
            Add{" "}
          </Link>
        </TaskConfigButtons>
      </div>
    </div>
  );
};

export default NewTask;
