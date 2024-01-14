import axios from "axios";
import jwt from "jsonwebtoken";
import apiUrl from "@/components/utils/apiUrl";

export const getMyPosts = async () => {
  try {
    const token = localStorage.getItem("userToken");
    if (token) {
      const user = jwt.decode(token) as any;

      const res = await axios.get<Post[]>(
        `${apiUrl}/post/all_posts/by-author/?author=${user.username}`
      );

      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
