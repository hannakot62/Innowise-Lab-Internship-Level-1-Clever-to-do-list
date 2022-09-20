import React from "react";
import MyBtn from "@/components/UI/buttons/MyBtn";
<<<<<<< HEAD:src/components/UI/buttons/ TaskButton/TaskButton.tsx
import style from "./TaskButton.module.css";
=======
import style from "@/components/UI/buttons/TaskButton/TaskButton.module.css";
import { useSelector } from "react-redux";
>>>>>>> indexes:src/components/UI/buttons/TaskButton/TaskButton.tsx

const TaskButton = ({ children, ...props }: any) => {
  return (
    <MyBtn {...props} className={style.btn}>
      {children}
    </MyBtn>
  );
};

export { TaskButton };
