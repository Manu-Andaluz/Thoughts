import axios from "axios";
import apiUrl from "@/components/utils/apiUrl";

export const login = async () => {
  const path = `${apiUrl}/account/auth/login/`;

  const form = document.getElementById("login-up-form") as HTMLFormElement;
  const formData = new FormData(form);

  const res = await axios.post(path, formData);
  if (res.data?.token) {
    localStorage.setItem("userToken", res.data.token);

    if (typeof window !== "undefined") window.location.replace("/");
  }
};
