import axios from "axios";

export const getRecentPosts = async () => {
  try {
    const apiUrl = "http://localhost:8000/post/all_posts/";
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
