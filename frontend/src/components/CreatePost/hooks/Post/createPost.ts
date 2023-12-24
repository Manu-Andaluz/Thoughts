import axios from "axios";

export const createPost = async ({ body }: { body: string }) => {
  const apiUrl = "http://localhost:8000/post/all_posts/"; // Replace with your API endpoint
  const form = document.getElementById("create-post") as any;
  const formData = new FormData(form);
  formData.set("body", body);
  formData.set("author", "1");

  const res = await axios.post(apiUrl, formData);

  if (res.statusText == "Created") {
    window.location.replace("/");
  }
};
