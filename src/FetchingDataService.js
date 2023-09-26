import axios from "axios";
export class FetchingDataService {
  static getAllPosts = async () => {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return await response;
  };

  static getPostByID = async (id) => {
    let response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response;
  };
}

// static getAllPosts = async (limit = 10, page = 1) => {
//   let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
//     params: {
//       _limit: limit,
//       _page: page,
//     },
//   });
//   return await response;
// };
