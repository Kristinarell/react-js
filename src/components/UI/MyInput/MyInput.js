import React from "react";
import classes from "./MyInput.module.css";

export const MyInput = (props) => {
  return (
    <input
      className={classes.MyInpt}
      {...props} // Разворачиваем все пропсы, которые будут передена в MyInput
    />
  );
};
