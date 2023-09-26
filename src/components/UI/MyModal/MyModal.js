import React from "react";
import classes from "./MyModal.module.css";

// останавливаем всплытие событий, чтобы модально окно не закрывалось при нажатии на саму форму
// так как родительсикй div ловит все клики внутри себя
export const MyModal = ({ children, visible, setVisible }) => {
  let cssClass = visible ? [classes.myModal, classes.active].join(" ") : classes.myModal;
  return (
    <div className={cssClass} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
