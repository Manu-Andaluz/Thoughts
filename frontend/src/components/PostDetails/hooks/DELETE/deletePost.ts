import axios from "axios";

export const deletePost = async (postId: any) => {
  const apiUrl = `http://localhost:8000/post/all_posts/${postId}`; // Replace with your API endpoint

  const res = await axios.delete(apiUrl);
  console.log("res : ", res);

  if (res.data) {
    window.location.replace("/");
  }
};
