import axios from "axios";

export const signUp = async () => {
  const apiUrl = "http://localhost:8000/account/auth/register/"; // Replace with your API endpoint

  const form = document.getElementById("sign-up-form") as HTMLFormElement;
  const formData = new FormData(form);

  const res = await axios.post(apiUrl, formData);
  console.log(res);
  return res.data;
};
