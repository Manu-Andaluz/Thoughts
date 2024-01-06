import axios from "axios";
import apiUrl from "@/components/utils/apiUrl";

export const deletePost = async (postId: string | number) => {
  const path = `${apiUrl}/post/all_posts/${postId}`;

  const res = await axios.delete(path);

  if (res.data && typeof window !== "undefined") {
    window.location.replace("/");
  }
};
