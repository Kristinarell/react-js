import React from "react";
import PostList from "../components/PostList";
import NewPostForm from "../components/NewPostForm";
import MyButton from "../components/UI/MyButton/MyButton";
import PostFilter from "../components/PostFilter";
import { useFilter } from "../hooks/useFilter";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { FetchingDataService } from "../FetchingDataService";
import { useEffect, useState } from "react";
import Pagination from "../components/UI/Pagination/Pagination";

export const PostsPage = () => {
  //console.log(`RENDER POSTPAGE`);
  const [posts, setPosts] = useState([]);
  const [myModal, setMyModal] = useState(false);
  const defaultValue = "Сортировка";

  // при сортировке или поиске срабатывает setFilter -> происходит ререндер и высчитывается sortedAndSearchedPosts
  const [filter, setFilter] = useState({ selectedSort: defaultValue, searchQuery: "" });
  const sortedAndSearchedPosts = useFilter(filter, posts, defaultValue);

  const [postsPerPage, setPostsPerPage] = useState(10); // количество объектов на странице
  const [currentPage, setCurrentPage] = useState(1); // текущая страница

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setMyModal(false);
  };
  const removePost = (removedPost) => {
    setPosts(posts.filter((post) => removedPost.id !== post.id));
  };

  const [fetchAllPosts, postsLoading, postsError] = useFetching(async () => {
    let response = await FetchingDataService.getAllPosts();
    setPosts(response.data);
  });

  useEffect(() => {
    console.log(`POST WAS FETCHED`);
    fetchAllPosts();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sortedAndSearchedPosts.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {postsLoading && <Loader />}
      <PostFilter filter={filter} setFilter={setFilter} defaultValue={defaultValue} />
      <PostList posts={currentPosts} remove={removePost} />
      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={sortedAndSearchedPosts.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

//console.log(`Total Items2:${totalItems}`);

//Для авторизированных пользователей добавить возможность добавлять новые посты

{
  /*<MyButton onClick={() => setMyModal(true)}>Создать пост</MyButton> 
    <MyModal visible={myModal} setVisible={setMyModal}>
        <NewPostForm create={createNewPost} />
      </MyModal> */
}
