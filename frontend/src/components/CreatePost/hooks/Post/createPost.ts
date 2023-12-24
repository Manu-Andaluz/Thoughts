import axios from "axios";

export const createPost = async ({
  editorContent,
}: {
  editorContent: string;
}) => {
  const apiUrl = "http://localhost:8000/post/all_posts/"; // Replace with your API endpoint
  const form = document.getElementById("create-post") as any;
  const formData = new FormData(form);
  const authorId = localStorage.getItem("thoughtsUserId");

  formData.set("body", editorContent);
  formData.set("author", `${authorId}`);

  const res = await axios.post(apiUrl, formData);

  if (res.data) {
    window.location.replace("/");
  }
};
