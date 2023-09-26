import React from "react";
import { MyInput } from "./UI/MyInput/MyInput";
import { MySelect } from "./UI/MySelect/MySelect";

const PostFilter = ({ filter, setFilter, defaultValue }) => {
  return (
    <>
      <div className="filter_wrapper">
        <MyInput
          value={filter.searchQuery}
          onChange={(event) => {
            setFilter({ ...filter, searchQuery: event.target.value });
          }}
          placeholder="Поиск..."
        />
        <MySelect
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
          value={filter.selectedSort}
          onChange={(sort) => {
            setFilter({ ...filter, selectedSort: sort });
          }}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default PostFilter;
