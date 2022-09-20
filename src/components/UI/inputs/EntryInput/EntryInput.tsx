import React from "react";
import style from "./EntryInput.module.css";

const EntryInput = ({ ...props }: any) => {
  return (
    <input
      {...props}
      className={props.error ? style.entryInputError : style.entryInput}
    />
  );
};

export { EntryInput };
