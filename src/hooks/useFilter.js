import { useMemo } from "react";
const useFilter = (filter, posts, defaultValue) => {
  const sortedPosts = useMemo(() => {
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

  return sortedAndSearchedPosts;
};

export { useFilter };
