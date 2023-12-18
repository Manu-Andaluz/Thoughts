import axios from "axios";

export const getPostDetail = async (postId: any) => {
  try {
    console.log(postId);
    const apiUrl = `https://thoughts-production.up.railway.app/post/all_posts/${postId}/`;
    const res = await axios.get(apiUrl);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
