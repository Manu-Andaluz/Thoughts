import axios from "axios";

export const deletePost = async (postId: string | number) => {
  const apiUrl = `https://thoughts-production.up.railway.app/post/all_posts/${postId}`;

  const res = await axios.delete(apiUrl);

  if (res.data && typeof window !== "undefined") {
    window.location.replace("/");
  }
};
