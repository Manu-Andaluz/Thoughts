import axios from "axios";

export const signUp = async () => {
  const apiUrl = "http://localhost:8000/account/auth/register/"; // Replace with your API endpoint

  const form = document.getElementById("sign-up-form") as HTMLFormElement;
  const formData = new FormData(form);

  const res = await axios.post(apiUrl, formData);

  if (res.data?.token) {
    localStorage.setItem("userToken", res.data.token);
    localStorage.setItem("thoughtsUserId", res.data.user.id);
    window.location.replace("/");
  }
};
