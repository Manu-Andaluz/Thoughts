import axios from "axios";
import jwt from "jsonwebtoken";

export const getMyPosts = async () => {
  try {
    const token = localStorage.getItem("userToken");
    const user = jwt.decode(token);

    const res = await axios.get<Post[]>(
      `https://thoughts-production.up.railway.app/post/all_posts/by-author/?author=${user.username}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
