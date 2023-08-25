import React, { useMemo, useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/style.css";
import PostList from "./components/PostList";
import NewPostForm from "./components/NewPostForm";
import { MySelect } from "./components/UI/MySelect";
import { MyInput } from "./components/UI/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "генадий", body: "ммммммммммммм" },
    { id: 2, title: "ккккккккккккк", body: "ввввввввввввв" },
    { id: 3, title: "яяяяяяяяяяяяя", body: "гггггггггггггг" },
    { id: 4, title: "аааааааа", body: "букин" },
  ]);

  const defaultValue = "Сортировка";
  // const [selectedSort, setSelectedSort] = useState(defaultValue);
  // const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ selectedSort: defaultValue, searchQuery: "" });

  const sortedPosts = useMemo(() => {
    console.log("Функция GETSORTEDPOSTS");
    if (filter.selectedSort !== defaultValue) {
      return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
    } else return posts;
  }, [filter.selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter.searchQuery) || post.body.toLowerCase().includes(filter.searchQuery)
    );
  }, [filter.searchQuery, sortedPosts]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => removedPost.id !== post.id));
  };

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} defaultValue={defaultValue} />
      <NewPostForm create={createNewPost} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} />
    </div>
  );
}

export default App;
