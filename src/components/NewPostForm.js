import React, { useState } from "react";
import MyButton from "./UI/MyButton";
import { MyInput } from "./UI/MyInput";
import "../styles/style.css";

const NewPostForm = ({ create }) => {
  //   Если в форме несколько заполняемых полей
  //   Можно не создавать отдельно состояние для каждого
  //   А объединить в объект

  //   const [title, setTitle] = useState(" ");
  //   const [body, setBody] = useState(" ");

  const [post, setPost] = useState({ title: " ", body: " " });

  const addNewPost = (event) => {
    event.preventDefault();
    create({ id: Date.now(), ...post });
    setPost({ title: " ", body: " " }); // затираем данные у поста, чтобы очистить поля после обновления
  };

  return (
    <form className="form_container">
      <MyInput
        type="text"
        placeholder="Введите назвавание поста"
        value={post.title}
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
        }}
      />
      <MyInput
        type="text"
        placeholder="Введите текст поста"
        value={post.body}
        onChange={(event) => {
          setPost({ ...post, body: event.target.value });
        }}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default NewPostForm;
