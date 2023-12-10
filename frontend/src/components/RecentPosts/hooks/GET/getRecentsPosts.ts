import axios from "axios";

export const getRecentPosts = async () => {
  const apiUrl = "http://localhost:8000/post/all_posts/"; // Replace with your API endpoint

  const res = await axios.get(apiUrl);
  console.log(res);
  return res.data;
};
