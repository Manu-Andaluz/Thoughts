import axios from "axios";
import apiUrl from "@/components/utils/apiUrl";

export const getRecentPosts = async () => {
  try {
    const path = `${apiUrl}/post/all_posts/`;
    const res = await axios.get(path);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
