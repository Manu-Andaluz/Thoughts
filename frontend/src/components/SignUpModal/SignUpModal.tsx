"use client";
import React, { useState } from "react";
import style from "./SignUpModal.module.scss";
import { CloseIcon } from "../ModalNavigationDrawer/iconts";
import { signUp } from "./hooks/Post/signUp";
import { login } from "./hooks/Post/login";

const SignUpModal = () => {
  const [show, setShow] = useState("login");

  const closeDialog = (e: any) => {
    const element = document.getElementById(
      "signup-modal",
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
        {show === "login" ? (
          <>
            <h3>Login</h3>

            <form
              className={style.from_container}
              id="login-up-form"
              onSubmit={(e: any) => e.preventDefault()}
            >
              <div className={style.input_container}>
                <input type="text" id="username" name="username" required />
                <label htmlFor="username">User Name</label>
              </div>

              <div className={style.input_container}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete=""
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className={style.form_buttons}>
                <button className={style.btn} onClick={login}>
                  Login
                </button>
                <button
                  className="unlined-btn"
                  onClick={() => setShow("register")}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
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
                <input type="password" id="password" name="password" required />
                <label htmlFor="password">Password</label>
              </div>

              <div className={style.form_buttons}>
                <button className={style.btn} onClick={signUp}>
                  Sign Up
                </button>
                <button
                  className="unlined-btn"
                  onClick={() => setShow("login")}
                >
                  Go to login
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </dialog>
  );
};

export default SignUpModal;
