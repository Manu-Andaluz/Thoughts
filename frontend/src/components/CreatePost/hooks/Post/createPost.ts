import axios from "axios";
import jwt from "jsonwebtoken";

export const createPost = async ({
  editorContent,
}: {
  editorContent: string;
}) => {
  try {
    const apiUrl = "https://thoughts-production.up.railway.app/post/all_posts/"; // Replace with your API endpoint
    const form = document.getElementById("create-post") as any;
    const formData = new FormData(form);
    const token = localStorage.getItem("userToken");
    const user = jwt.decode(token) as any;

    formData.set("body", editorContent);
    formData.set("author", `${user.user_id}`);

    const res = await axios.post(apiUrl, formData);

    if (res.data) {
      window.location.replace("/");
    }
  } catch (error) {
    console.log(error);
  }
};
