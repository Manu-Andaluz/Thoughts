"use client";
import React from "react";
import style from "./SignUpModal.module.scss";
import { CloseIcon } from "../ModalNavigationDrawer/iconts";

const SignUpModal = () => {
  const closeDialog = (e: any) => {
    const element = document.getElementById(
      "signup-modal"
    ) as HTMLDialogElement;
    element.classList.add(style.close);
    const animationEndHandler = (event: any) => {
      element.close();
      element.classList.remove(style.close);
      element.removeEventListener("animationend", animationEndHandler);
    };
    element.addEventListener("animationend", animationEndHandler);
  };

  return (
    <dialog id={"signup-modal"} className={style.dialog}>
      <section className={style.container}>
        <span className={style.close} onClick={closeDialog}>
          <CloseIcon />
        </span>
        <h3>Sign up / Log in</h3>

        <form className={style.from_container}>
          <div className={style.input_container}>
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className={style.input_container}>
            <input type="text" id="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className={style.textarea_container}>
            <textarea name="message" id="message" required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <div className={style.form_buttons}>
            <button>Login</button>
          </div>
        </form>
      </section>
    </dialog>
  );
};

export default SignUpModal;
