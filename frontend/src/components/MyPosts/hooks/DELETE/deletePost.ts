import axios from "axios";
import jwt from "jsonwebtoken";

export const deletePost = async (postId: number) => {
  try {
    const token = localStorage.getItem("userToken");
    if (token) {
      const user = jwt.decode(token) as any;

      alert("This feature is not ready yet");
      // const res = await axios.delete(``);

      // return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
