import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, ...props }) => {
  if (!posts.length) {
    return <h1> Посты не найдены</h1>;
  }

  return (
    <>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} number={index + 1} remove={props.remove} />
      ))}
    </>
  );
};

export default PostList;
