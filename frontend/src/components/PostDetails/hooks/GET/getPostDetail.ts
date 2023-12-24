import axios from "axios";

export const getPostDetail = async (postId: any) => {
  try {
    const apiUrl = `http://localhost:8000/post/all_posts/${postId}/`;
    const res = await axios.get(apiUrl);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
