"use client";
import React from "react";
import style from "./SignUpModal.module.scss";
import { signUp } from "./hooks/Post/signUp";
import Link from "next/link";

const SignUpModal = () => {
  return (
    <section className={style.container}>
      <div className={style.modal}>
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

            <Link href={"login"}>
              <button className="unlined-btn">Go to login</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpModal;
