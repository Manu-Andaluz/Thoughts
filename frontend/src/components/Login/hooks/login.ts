import axios from "axios";

export const login = async () => {
  const apiUrl =
    "https://thoughts-production.up.railway.app/account/auth/login/"; // Replace with your API endpoint

  const form = document.getElementById("login-up-form") as HTMLFormElement;
  const formData = new FormData(form);

  const res = await axios.post(apiUrl, formData);
  if (res.data?.token) {
    localStorage.setItem("userToken", res.data.token);

    if (typeof window !== "undefined") window.location.replace("/");
  }
};
