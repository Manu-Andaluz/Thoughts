"use client";
import React from "react";
import style from "./SignUpModal.module.scss";
import { CloseIcon } from "../ModalNavigationDrawer/iconts";
import { signUp } from "./hooks/Post/signUp";

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
        <h3>Sign up</h3>

        <form
          className={style.from_container}
          id="sign-up-form"
          onSubmit={(e: any) => e.preventDefault()}
        >
          <div className={style.input_container}>
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">User Name</label>
          </div>

          <div className={style.input_container}>
            <input type="text" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className={style.input_container}>
            <input type="text" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>

          <div className={style.form_buttons}>
            <button className={style.btn} onClick={signUp}>
              Login
            </button>
            <button className="unlined-btn">Go to login</button>
          </div>
        </form>
      </section>
    </dialog>
  );
};

export default SignUpModal;
