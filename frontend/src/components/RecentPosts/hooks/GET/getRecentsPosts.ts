import axios from "axios";

export const getRecentPosts = async () => {
  const apiUrl = "https://thoughts-production.up.railway.app/post/all_posts/"; // Replace with your API endpoint

  const res = await axios.get(apiUrl);
  console.log(res);
  return res.data;
};
