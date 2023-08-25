import React, { useMemofrom } from "react";
import { MyInput } from "./UI/MyInput";
import { MySelect } from "./UI/MySelect";

const PostFilter = ({ filter, setFilter, defaultValue }) => {
  return (
    <>
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
    </>
  );
};

export default PostFilter;
