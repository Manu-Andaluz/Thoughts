import axios from "axios";
import apiUrl from "@/components/utils/apiUrl";

export const getPostDetail = async (postId: number | string) => {
  try {
    const path = `${apiUrl}/post/all_posts/${postId}/`;
    const res = await axios.get(path);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
