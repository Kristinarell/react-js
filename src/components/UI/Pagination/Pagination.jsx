import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

const Pagination = ({ itemsPerPage, totalItems, setCurrentPage }) => {
  //function culculetePagesQuantity(){
  const pages = [];
  for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <div className="pagination">
        {pages.map((elem) => (
          <MyButton
            key={elem}
            onClick={() => {
              setCurrentPage(elem);
            }}>
            {elem}
          </MyButton>
        ))}
      </div>
    </>
  );
};

export default Pagination;
