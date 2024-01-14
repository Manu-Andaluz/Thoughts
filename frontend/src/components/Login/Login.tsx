"use client";
import React from "react";
import style from "./Login.module.scss";
import Link from "next/link";
import { login } from "./hooks/login";

const Login = () => {
  return (
    <section className={style.container}>
      <div className={style.modal}>
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
            <Link href={"/sign-up"}>
              <button className="unlined-btn">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
