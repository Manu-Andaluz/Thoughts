import axios from "axios";
import apiUrl from "@/components/utils/apiUrl";

export const signUp = async () => {
  const path = `${apiUrl}/account/auth/register/`;

  const form = document.getElementById("sign-up-form") as HTMLFormElement;
  const formData = new FormData(form);

  const res = await axios.post(path, formData);

  if (res.data?.token) {
    localStorage.setItem("userToken", res.data.token);

    if (typeof window !== "undefined") window.location.replace("/");
  }
};
