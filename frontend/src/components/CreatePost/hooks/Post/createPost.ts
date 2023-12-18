import axios from "axios";

export const createPost = ({ body }: { body: string }) => {
  const apiUrl = "https://thoughts-production.up.railway.app/post/all_posts/"; // Replace with your API endpoint
  const form = document.getElementById("create-post") as any;
  const formData = new FormData(form);
  formData.set("body", body);
  formData.set("author", "1");

  const headers = {
    "Content-Type": "application/json",
    // Add other headers as needed
  };

  const res = axios.post(apiUrl, formData);

  console.log(res);
};
