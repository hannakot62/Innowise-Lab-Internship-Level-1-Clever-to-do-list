import React from "react";
import style from "./Notification.module.css";

const Notification = ({ e, hidden }: { e: string; hidden: boolean }) => {
  return hidden ? (
    <span className={style.empty}></span>
  ) : (
    <span className={style.notification}>{e}</span>
  );
};

export default Notification;
