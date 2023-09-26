import React from "react";
import MyButton from "./UI/MyButton/MyButton";

const PostItem = ({ post, ...props }) => {
  return (
    <div className="post">
      <div className="post_content">
        <h2 className="title">
          {post.id}. {post.title}
        </h2>
        <div className="body">{post.body}</div>
      </div>

      <MyButton onClick={() => props.remove(post)}>Удалить</MyButton>
    </div>
  );
};

export default PostItem;
