import React from "react";
import style from "./EntryInput.module.css";
import { useSelector } from "react-redux";

const EntryInput = ({ ...props }: any) => {
  const theme = useSelector((state: any) => state.theme.theme);
  return (
    <input
      {...props}
      className={
        props.error
          ? style.entryInputError
          : theme == "light"
          ? style.entryInputlight
          : style.entryInputdark
      }
    />
  );
};

export default EntryInput;
