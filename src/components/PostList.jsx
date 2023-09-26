import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, ...props }) => {
  if (!posts.length) {
    return <h1> Посты не найдены</h1>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} remove={props.remove} />
      ))}
    </>
  );
};

export default PostList;
