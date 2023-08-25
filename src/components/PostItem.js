import React, { Fragment } from "react";
import MyButton from "./UI/MyButton";

const PostItem = ({ post, ...props }) => {
  return (
    <div className="post">
      <div className="post_content">
        <h2 className="headline">
          {props.number}. {post.title}
        </h2>
        <div className="content">{post.body}</div>
      </div>
      <MyButton onClick={() => props.remove(post)}>Удалить</MyButton>
    </div>
  );
};

export default PostItem;
