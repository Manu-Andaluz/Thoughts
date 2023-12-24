import axios from "axios";

export const getPostDetail = async (postId: any) => {
  try {
    const apiUrl = `https://thoughts-production.up.railway.app/post/all_posts/${postId}/`;
    const res = await axios.get(apiUrl);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
