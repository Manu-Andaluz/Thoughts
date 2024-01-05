import axios from "axios";

export const getRecentPosts = async () => {
  try {
    const apiUrl =
      "https://thoughts-production.up.railway.app /post/all_posts/";
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
