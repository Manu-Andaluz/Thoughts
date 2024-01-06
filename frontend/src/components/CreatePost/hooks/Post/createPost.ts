import axios from "axios";
import jwt from "jsonwebtoken";
import apiUrl from "@/components/utils/apiUrl";

export const createPost = async ({
  editorContent,
}: {
  editorContent: string;
}) => {
  try {
    const path = `${apiUrl}/post/all_posts/`;
    const form = document.getElementById("create-post") as any;
    const formData = new FormData(form);
    const token = localStorage.getItem("userToken") as any;
    const user = jwt.decode(token) as any;

    formData.set("body", editorContent);
    formData.set("author", `${user.user_id}`);

    const res = await axios.post(path, formData);

    if (res.data) {
      window.location.replace("/");
    }
  } catch (error) {
    console.log(error);
  }
};
