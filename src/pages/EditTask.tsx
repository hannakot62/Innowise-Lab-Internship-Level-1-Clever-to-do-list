import React from "react";
import TaskConfigButtons from "../components/UI/buttons/TaskConfigButtons/TaskConfigButtons";
import { Link } from "react-router-dom";
import Plus from "../components/UI/pics/Plus";

const EditTask = () => {
  return (
    <div className={"task-config-container"}>
      <h1 className={"new-edit-task"}>Edit Task</h1>
      <input className={"title"} type={"text"} placeholder={"Title"} />
      <hr />
      <textarea
        className={"description"}
        placeholder={"надо забрать, как и всё остальное"}
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
            Cancel{" "}
          </Link>
        </TaskConfigButtons>
        <TaskConfigButtons>
          {" "}
          <Link className={"link"} to="/todos">
            Save
          </Link>
        </TaskConfigButtons>
      </div>
    </div>
  );
};

export default EditTask;
