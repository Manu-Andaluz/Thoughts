import axios from "axios";
import jwt from "jsonwebtoken";
import apiUrl from "@/components/utils/apiUrl";

export const deletePost = async (postId: number) => {
  try {
    const token = localStorage.getItem("userToken");
    if (token) {
      const user = jwt.decode(token) as any;

      const res = await axios.delete(`${apiUrl}/post/all_posts/${postId}/`);
      console.log(res);

      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
